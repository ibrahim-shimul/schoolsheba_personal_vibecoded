import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../lib/http";

export function requireTenant(req: Request, _res: Response, next: NextFunction) {
  if (!req.auth?.schoolId) {
    return next(new HttpError(400, "Tenant context missing"));
  }
  return next();
}
