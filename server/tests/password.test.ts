import test from "node:test";
import assert from "node:assert/strict";
import { hashPassword, verifyPassword } from "../lib/password.ts";

test("password hashing and verification works", () => {
  const hashed = hashPassword("secure-password");
  assert.equal(verifyPassword("secure-password", hashed), true);
  assert.equal(verifyPassword("wrong-password", hashed), false);
});
