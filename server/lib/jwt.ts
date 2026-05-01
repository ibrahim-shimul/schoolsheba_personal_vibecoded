import { createHmac, timingSafeEqual } from "crypto";
import type { UserSessionPayload } from "@shared/contracts";

function base64UrlEncode(value: string): string {
  return Buffer.from(value).toString("base64url");
}

function base64UrlDecode(value: string): string {
  return Buffer.from(value, "base64url").toString("utf-8");
}

interface JwtPayload extends UserSessionPayload {
  iat: number;
  exp: number;
  type: "access" | "refresh";
}

function sign(input: string, secret: string): string {
  return createHmac("sha256", secret).update(input).digest("base64url");
}

function makeToken(
  payload: UserSessionPayload,
  secret: string,
  ttlSeconds: number,
  type: JwtPayload["type"],
): string {
  const header = { alg: "HS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const body: JwtPayload = { ...payload, iat: now, exp: now + ttlSeconds, type };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedBody = base64UrlEncode(JSON.stringify(body));
  const signature = sign(`${encodedHeader}.${encodedBody}`, secret);
  return `${encodedHeader}.${encodedBody}.${signature}`;
}

function parseToken(token: string, secret: string, expectedType: JwtPayload["type"]): JwtPayload {
  const [encodedHeader, encodedBody, signature] = token.split(".");
  if (!encodedHeader || !encodedBody || !signature) {
    throw new Error("Malformed token");
  }

  const expected = sign(`${encodedHeader}.${encodedBody}`, secret);
  const isValid = timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!isValid) {
    throw new Error("Invalid token signature");
  }

  const payload = JSON.parse(base64UrlDecode(encodedBody)) as JwtPayload;
  if (payload.type !== expectedType) {
    throw new Error("Invalid token type");
  }
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp < now) {
    throw new Error("Token expired");
  }

  return payload;
}

export function createAccessToken(payload: UserSessionPayload, secret: string, ttlSeconds: number): string {
  return makeToken(payload, secret, ttlSeconds, "access");
}

export function createRefreshToken(payload: UserSessionPayload, secret: string, ttlSeconds: number): string {
  return makeToken(payload, secret, ttlSeconds, "refresh");
}

export function verifyAccessToken(token: string, secret: string): UserSessionPayload {
  const payload = parseToken(token, secret, "access");
  const { userId, role, schoolId } = payload;
  return { userId, role, schoolId };
}

export function verifyRefreshToken(token: string, secret: string): UserSessionPayload {
  const payload = parseToken(token, secret, "refresh");
  const { userId, role, schoolId } = payload;
  return { userId, role, schoolId };
}
