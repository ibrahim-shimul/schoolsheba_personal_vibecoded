import type { NextFunction, Request, Response } from "express";
import type { UserRole } from "@shared/contracts";
import { getEnv } from "../lib/env";
import { HttpError } from "../lib/http";
import { verifyAccessToken } from "../lib/jwt";

declare module "express-serve-static-core" {
  interface Request {
    auth?: {
      userId: string;
      role: UserRole;
      schoolId?: string;
    };
  }
}

export function requireAuth(req: Request, _res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return next(new HttpError(401, "Unauthorized"));
  }

  const token = authHeader.replace("Bearer ", "");
  try {
    const payload = verifyAccessToken(token, getEnv().JWT_ACCESS_SECRET);
    req.auth = payload;
    return next();
  } catch (_error) {
    return next(new HttpError(401, "Invalid access token"));
  }
}

export function requireRole(...roles: UserRole[]) {
  return (req: Request, _res: Response, next: NextFunction) => {
    if (!req.auth || !roles.includes(req.auth.role)) {
      return next(new HttpError(403, "Forbidden"));
    }
    return next();
  };
}
