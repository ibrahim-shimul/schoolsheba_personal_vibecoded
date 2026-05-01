import { randomBytes, scryptSync, timingSafeEqual } from "crypto";

const KEYLEN = 64;

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, KEYLEN).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, hashedPassword: string): boolean {
  const [salt, storedHash] = hashedPassword.split(":");
  if (!salt || !storedHash) return false;
  const hash = scryptSync(password, salt, KEYLEN).toString("hex");
  return timingSafeEqual(Buffer.from(storedHash, "hex"), Buffer.from(hash, "hex"));
}
