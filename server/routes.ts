import type { Express } from "express";
import { randomUUID } from "crypto";
import { type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { hashPassword, verifyPassword } from "./lib/password";
import { createAccessToken, createRefreshToken, verifyRefreshToken } from "./lib/jwt";
import { getEnv } from "./lib/env";
import { HttpError } from "./lib/http";
import { requireAuth, requireRole } from "./middleware/auth";
import { requireTenant } from "./middleware/tenant";
import { evaluateSubscriptions, getTrialEndDate } from "./services/subscription";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  schoolName: z.string().min(2),
  schoolSlug: z.string().min(3).regex(/^[a-z0-9-]+$/),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const refreshSchema = z.object({ refreshToken: z.string().min(20) });
const subscribeSchema = z.object({
  packageTier: z.enum(["free", "premium"]),
  months: z.coerce.number().int().min(1).max(24).default(1),
});
const portfolioUpdateSchema = z.object({
  schoolName: z.string().min(2),
  heroTitle: z.string().min(2),
  heroSubtitle: z.string().min(2),
  primaryColor: z.string().min(4),
});

function makeTokens(payload: { userId: string; role: "platform_admin" | "school_owner_admin"; schoolId?: string }) {
  const env = getEnv();
  return {
    accessToken: createAccessToken(payload, env.JWT_ACCESS_SECRET, env.ACCESS_TOKEN_TTL_SECONDS),
    refreshToken: createRefreshToken(payload, env.JWT_REFRESH_SECRET, env.REFRESH_TOKEN_TTL_SECONDS),
  };
}

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  await storage.initialize();

  app.get("/api/health", async (_req, res) => {
    res.json({ ok: true });
  });

  app.post("/api/auth/register", async (req, res, next) => {
    try {
      const body = registerSchema.parse(req.body);
      const exists = await storage.findUserByEmail(body.email.toLowerCase());
      if (exists) throw new HttpError(409, "Email already exists");

      const schoolExists = await storage.findSchoolBySlug(body.schoolSlug);
      if (schoolExists) throw new HttpError(409, "School slug already exists");

      const user = await storage.createUser({
        name: body.name,
        email: body.email.toLowerCase(),
        passwordHash: hashPassword(body.password),
        role: "school_owner_admin",
      });

      const school = await storage.createSchool({
        name: body.schoolName,
        slug: body.schoolSlug,
        ownerUserId: user._id!.toString(),
        packageTier: "free",
        subscriptionStatus: "trial",
        trialEndsAt: getTrialEndDate(),
      });
      await storage.updateUserById(user._id!.toString(), { schoolId: school._id!.toString() });

      await storage.createUser({
        name: "Platform Admin",
        email: "admin@schoolsheba.com",
        passwordHash: hashPassword("change-this-password"),
        role: "platform_admin",
      }).catch(() => undefined);

      const tokens = makeTokens({
        userId: user._id!.toString(),
        role: user.role,
        schoolId: school._id!.toString(),
      });

      return res.status(201).json({
        ...tokens,
        user: {
          id: user._id!.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          schoolId: school._id!.toString(),
        },
      });
    } catch (error) {
      return next(error);
    }
  });

  app.post("/api/auth/login", async (req, res, next) => {
    try {
      const body = loginSchema.parse(req.body);
      const user = await storage.findUserByEmail(body.email.toLowerCase());
      if (!user || !verifyPassword(body.password, user.passwordHash)) {
        throw new HttpError(401, "Invalid email or password");
      }

      const school = user.schoolId ? await storage.findSchoolById(user.schoolId) : null;
      const schoolId = user.role === "school_owner_admin" ? school?._id?.toString() : undefined;
      const tokens = makeTokens({ userId: user._id!.toString(), role: user.role, schoolId });
      return res.json({
        ...tokens,
        user: {
          id: user._id!.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          schoolId,
        },
      });
    } catch (error) {
      return next(error);
    }
  });

  app.post("/api/auth/refresh", async (req, res, next) => {
    try {
      const body = refreshSchema.parse(req.body);
      const payload = verifyRefreshToken(body.refreshToken, getEnv().JWT_REFRESH_SECRET);
      const tokens = makeTokens(payload);
      return res.json(tokens);
    } catch (_error) {
      return next(new HttpError(401, "Invalid refresh token"));
    }
  });

  app.get("/api/auth/me", requireAuth, async (req, res, next) => {
    try {
      const user = await storage.findUserById(req.auth!.userId);
      if (!user) throw new HttpError(404, "User not found");
      return res.json({
        id: user._id!.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        schoolId: req.auth?.schoolId,
      });
    } catch (error) {
      return next(error);
    }
  });

  app.get("/api/billing/plans", (_req, res) => {
    res.json([
      { id: "free", name: "Free", monthlyPrice: 0, features: ["Basic editing", "Subdomain"] },
      { id: "premium", name: "Premium", monthlyPrice: 399, features: ["Advanced editing", "Custom domain", "Priority support"] },
    ]);
  });

  app.get("/api/billing/current", requireAuth, requireTenant, async (req, res, next) => {
    try {
      const school = await storage.findSchoolById(req.auth!.schoolId!);
      if (!school) throw new HttpError(404, "School not found");
      return res.json(school);
    } catch (error) {
      return next(error);
    }
  });

  app.post("/api/billing/subscribe", requireAuth, requireTenant, async (req, res, next) => {
    try {
      const body = subscribeSchema.parse(req.body);
      const school = await storage.findSchoolById(req.auth!.schoolId!);
      if (!school) throw new HttpError(404, "School not found");
      const amount = body.packageTier === "premium" ? 399 * body.months : 0;
      const billing = await storage.createBilling({
        schoolId: req.auth!.schoolId!,
        amount,
        currency: "BDT",
        status: amount > 0 ? "pending" : "paid",
        packageTier: body.packageTier,
        months: body.months,
      });

      if (amount === 0) {
        await storage.updateSchoolById(req.auth!.schoolId!, {
          packageTier: "free",
          subscriptionStatus: "active",
          renewalDueAt: undefined,
          graceEndsAt: undefined,
          archivedAt: undefined,
        });
      }

      return res.status(201).json(billing);
    } catch (error) {
      return next(error);
    }
  });

  app.post("/api/billing/payments/initiate", requireAuth, requireTenant, async (req, res, next) => {
    try {
      const body = subscribeSchema.parse(req.body);
      const amount = body.packageTier === "premium" ? 399 * body.months : 0;
      if (amount <= 0) throw new HttpError(400, "No payment needed for free plan");
      const billing = await storage.createBilling({
        schoolId: req.auth!.schoolId!,
        amount,
        currency: "BDT",
        status: "pending",
        packageTier: body.packageTier,
        months: body.months,
        gatewayTransactionId: `SSL-${randomUUID()}`,
      });

      return res.status(201).json({
        billingId: billing._id!.toString(),
        gateway: "SSLCommerz",
        paymentUrl: `/api/billing/payments/callback?billingId=${billing._id!.toString()}&status=success`,
      });
    } catch (error) {
      return next(error);
    }
  });

  app.get("/api/billing/payments/callback", async (req, res, next) => {
    try {
      const billingId = z.string().min(1).parse(req.query.billingId);
      const status = z.enum(["success", "failed"]).parse(req.query.status);
      const billing = await storage.updateBillingById(billingId, { status: status === "success" ? "paid" : "failed" });
      if (!billing) throw new HttpError(404, "Billing not found");

      if (status === "success") {
        const renewalDueAt = new Date();
        renewalDueAt.setMonth(renewalDueAt.getMonth() + billing.months);
        await storage.updateSchoolById(billing.schoolId, {
          packageTier: billing.packageTier,
          subscriptionStatus: "active",
          renewalDueAt,
          graceEndsAt: undefined,
          archivedAt: undefined,
        });
        await storage.createInvoice({
          schoolId: billing.schoolId,
          billingId,
          amount: billing.amount,
          currency: "BDT",
          generatedAt: new Date(),
        });
      }

      return res.json({ ok: true, status });
    } catch (error) {
      return next(error);
    }
  });

  app.get("/api/billing/history", requireAuth, requireTenant, async (req, res, next) => {
    try {
      const [billings, invoices] = await Promise.all([
        storage.listBillingsBySchool(req.auth!.schoolId!),
        storage.listInvoicesBySchool(req.auth!.schoolId!),
      ]);
      return res.json({ billings, invoices });
    } catch (error) {
      return next(error);
    }
  });

  app.get("/api/portfolio/content", requireAuth, requireTenant, async (req, res, next) => {
    try {
      const content = await storage.getPortfolioContentBySchoolId(req.auth!.schoolId!);
      if (!content) throw new HttpError(404, "Portfolio content not found");
      return res.json(content);
    } catch (error) {
      return next(error);
    }
  });

  app.put("/api/portfolio/content", requireAuth, requireTenant, async (req, res, next) => {
    try {
      const payload = portfolioUpdateSchema.parse(req.body);
      const content = await storage.upsertPortfolioContent({
        schoolId: req.auth!.schoolId!,
        ...payload,
      });
      return res.json(content);
    } catch (error) {
      return next(error);
    }
  });

  app.get("/api/portfolio/public/:slug", async (req, res, next) => {
    try {
      const school = await storage.findSchoolBySlug(req.params.slug);
      if (!school || school.subscriptionStatus === "archived") {
        throw new HttpError(404, "Portfolio not found");
      }
      const content = await storage.getPortfolioContentBySchoolId(school._id!.toString());
      return res.json({ school, content });
    } catch (error) {
      return next(error);
    }
  });

  app.get("/api/admin/overview", requireAuth, requireRole("platform_admin"), async (_req, res, next) => {
    try {
      const schools = await storage.listSchools();
      const allBillings = await Promise.all(schools.map((school) => storage.listBillingsBySchool(school._id!.toString())));
      const revenue = allBillings.flat().filter((x) => x.status === "paid").reduce((sum, x) => sum + x.amount, 0);
      const archived = schools.filter((s) => s.subscriptionStatus === "archived").length;
      return res.json({
        schoolsTotal: schools.length,
        archivedTotal: archived,
        activeTotal: schools.length - archived,
        revenueTotal: revenue,
      });
    } catch (error) {
      return next(error);
    }
  });

  app.get("/api/premium/report", requireAuth, requireTenant, async (req, res, next) => {
    try {
      const school = await storage.findSchoolById(req.auth!.schoolId!);
      if (!school) throw new HttpError(404, "School not found");
      if (school.packageTier !== "premium") throw new HttpError(403, "Premium plan required");
      const billings = await storage.listBillingsBySchool(req.auth!.schoolId!);
      return res.json({
        schoolName: school.name,
        currentTier: school.packageTier,
        paidTransactions: billings.filter((b) => b.status === "paid").length,
      });
    } catch (error) {
      return next(error);
    }
  });

  setInterval(() => {
    evaluateSubscriptions().catch(() => undefined);
  }, 1000 * 60 * 60 * 6);

  return httpServer;
}
