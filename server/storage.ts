import { ObjectId } from "mongodb";
import type { PackageTier, SubscriptionStatus, UserRole } from "@shared/contracts";
import { connectMongo, getDb } from "./lib/mongo";

export interface UserDoc {
  _id?: ObjectId;
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  schoolId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SchoolDoc {
  _id?: ObjectId;
  name: string;
  slug: string;
  ownerUserId: string;
  packageTier: PackageTier;
  subscriptionStatus: SubscriptionStatus;
  trialEndsAt: Date;
  graceEndsAt?: Date;
  renewalDueAt?: Date;
  archivedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface BillingDoc {
  _id?: ObjectId;
  schoolId: string;
  amount: number;
  currency: "BDT";
  status: "pending" | "paid" | "failed";
  packageTier: PackageTier;
  months: number;
  gatewayTransactionId?: string;
  createdAt: Date;
}

export interface InvoiceDoc {
  _id?: ObjectId;
  schoolId: string;
  billingId: string;
  amount: number;
  currency: "BDT";
  generatedAt: Date;
}

export interface PortfolioContentDoc {
  _id?: ObjectId;
  schoolId: string;
  schoolName: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryColor: string;
  updatedAt: Date;
}

export interface IStorage {
  initialize(): Promise<void>;
  createUser(user: Omit<UserDoc, "_id" | "createdAt" | "updatedAt">): Promise<UserDoc>;
  updateUserById(id: string, update: Partial<UserDoc>): Promise<UserDoc | null>;
  findUserByEmail(email: string): Promise<UserDoc | null>;
  findUserById(id: string): Promise<UserDoc | null>;
  createSchool(school: Omit<SchoolDoc, "_id" | "createdAt" | "updatedAt">): Promise<SchoolDoc>;
  updateSchoolById(id: string, update: Partial<SchoolDoc>): Promise<SchoolDoc | null>;
  findSchoolById(id: string): Promise<SchoolDoc | null>;
  findSchoolBySlug(slug: string): Promise<SchoolDoc | null>;
  createBilling(entry: Omit<BillingDoc, "_id" | "createdAt">): Promise<BillingDoc>;
  updateBillingById(id: string, update: Partial<BillingDoc>): Promise<BillingDoc | null>;
  listBillingsBySchool(schoolId: string): Promise<BillingDoc[]>;
  createInvoice(entry: Omit<InvoiceDoc, "_id">): Promise<InvoiceDoc>;
  listInvoicesBySchool(schoolId: string): Promise<InvoiceDoc[]>;
  upsertPortfolioContent(content: Omit<PortfolioContentDoc, "_id" | "updatedAt">): Promise<PortfolioContentDoc>;
  getPortfolioContentBySchoolId(schoolId: string): Promise<PortfolioContentDoc | null>;
  listSchools(): Promise<SchoolDoc[]>;
}

class MongoStorage implements IStorage {
  async initialize(): Promise<void> {
    await connectMongo();
    const db = getDb();
    await db.collection<UserDoc>("users").createIndex({ email: 1 }, { unique: true });
    await db.collection<SchoolDoc>("schools").createIndex({ slug: 1 }, { unique: true });
    await db.collection<SchoolDoc>("schools").createIndex({ ownerUserId: 1 }, { unique: true });
  }

  async createUser(user: Omit<UserDoc, "_id" | "createdAt" | "updatedAt">): Promise<UserDoc> {
    const now = new Date();
    const doc: UserDoc = { ...user, createdAt: now, updatedAt: now };
    const db = getDb();
    const result = await db.collection<UserDoc>("users").insertOne(doc);
    return { ...doc, _id: result.insertedId };
  }

  async findUserByEmail(email: string): Promise<UserDoc | null> {
    return getDb().collection<UserDoc>("users").findOne({ email });
  }

  async updateUserById(id: string, update: Partial<UserDoc>): Promise<UserDoc | null> {
    const db = getDb();
    await db.collection<UserDoc>("users").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...update, updatedAt: new Date() } },
    );
    return this.findUserById(id);
  }

  async findUserById(id: string): Promise<UserDoc | null> {
    return getDb().collection<UserDoc>("users").findOne({ _id: new ObjectId(id) });
  }

  async createSchool(school: Omit<SchoolDoc, "_id" | "createdAt" | "updatedAt">): Promise<SchoolDoc> {
    const now = new Date();
    const doc: SchoolDoc = { ...school, createdAt: now, updatedAt: now };
    const db = getDb();
    const result = await db.collection<SchoolDoc>("schools").insertOne(doc);
    await this.upsertPortfolioContent({
      schoolId: result.insertedId.toString(),
      schoolName: school.name,
      heroTitle: "আধুনিক শিক্ষার বিশ্বস্ত প্রতিষ্ঠান",
      heroSubtitle: "আপনার প্রতিষ্ঠানের ডিজিটাল পরিচিতি এখন আরও সহজ।",
      primaryColor: "#00A8FF",
    });
    return { ...doc, _id: result.insertedId };
  }

  async updateSchoolById(id: string, update: Partial<SchoolDoc>): Promise<SchoolDoc | null> {
    const db = getDb();
    await db.collection<SchoolDoc>("schools").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { ...update, updatedAt: new Date() } },
    );
    return this.findSchoolById(id);
  }

  async findSchoolById(id: string): Promise<SchoolDoc | null> {
    return getDb().collection<SchoolDoc>("schools").findOne({ _id: new ObjectId(id) });
  }

  async findSchoolBySlug(slug: string): Promise<SchoolDoc | null> {
    return getDb().collection<SchoolDoc>("schools").findOne({ slug });
  }

  async createBilling(entry: Omit<BillingDoc, "_id" | "createdAt">): Promise<BillingDoc> {
    const doc: BillingDoc = { ...entry, createdAt: new Date() };
    const result = await getDb().collection<BillingDoc>("billings").insertOne(doc);
    return { ...doc, _id: result.insertedId };
  }

  async updateBillingById(id: string, update: Partial<BillingDoc>): Promise<BillingDoc | null> {
    const db = getDb();
    await db.collection<BillingDoc>("billings").findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: update },
    );
    return db.collection<BillingDoc>("billings").findOne({ _id: new ObjectId(id) });
  }

  async listBillingsBySchool(schoolId: string): Promise<BillingDoc[]> {
    return getDb()
      .collection<BillingDoc>("billings")
      .find({ schoolId })
      .sort({ createdAt: -1 })
      .toArray();
  }

  async createInvoice(entry: Omit<InvoiceDoc, "_id">): Promise<InvoiceDoc> {
    const result = await getDb().collection<InvoiceDoc>("invoices").insertOne(entry);
    return { ...entry, _id: result.insertedId };
  }

  async listInvoicesBySchool(schoolId: string): Promise<InvoiceDoc[]> {
    return getDb()
      .collection<InvoiceDoc>("invoices")
      .find({ schoolId })
      .sort({ generatedAt: -1 })
      .toArray();
  }

  async upsertPortfolioContent(content: Omit<PortfolioContentDoc, "_id" | "updatedAt">): Promise<PortfolioContentDoc> {
    const now = new Date();
    const db = getDb();
    await db
      .collection<PortfolioContentDoc>("portfolio_contents")
      .findOneAndUpdate(
        { schoolId: content.schoolId },
        { $set: { ...content, updatedAt: now } },
        { upsert: true },
      );
    const found = await db.collection<PortfolioContentDoc>("portfolio_contents").findOne({ schoolId: content.schoolId });
    if (!found) throw new Error("Failed to upsert portfolio");
    return found;
  }

  async getPortfolioContentBySchoolId(schoolId: string): Promise<PortfolioContentDoc | null> {
    return getDb().collection<PortfolioContentDoc>("portfolio_contents").findOne({ schoolId });
  }

  async listSchools(): Promise<SchoolDoc[]> {
    return getDb().collection<SchoolDoc>("schools").find().toArray();
  }
}

export const storage = new MongoStorage();
