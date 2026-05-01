import test from "node:test";
import assert from "node:assert/strict";
import { createAccessToken, verifyAccessToken } from "../lib/jwt.ts";

test("jwt token roundtrip works", () => {
  const payload = { userId: "u1", role: "school_owner_admin" as const, schoolId: "s1" };
  const token = createAccessToken(payload, "1234567890123456", 120);
  const parsed = verifyAccessToken(token, "1234567890123456");
  assert.equal(parsed.userId, "u1");
  assert.equal(parsed.role, "school_owner_admin");
  assert.equal(parsed.schoolId, "s1");
});
