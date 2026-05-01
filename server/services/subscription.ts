import type { SubscriptionStatus } from "@shared/contracts";
import { storage, type SchoolDoc } from "../storage";

const TRIAL_DAYS = 30;
const GRACE_DAYS = 30;

export function getTrialEndDate(now = new Date()): Date {
  return new Date(now.getTime() + TRIAL_DAYS * 24 * 60 * 60 * 1000);
}

export function getGraceEndDate(now = new Date()): Date {
  return new Date(now.getTime() + GRACE_DAYS * 24 * 60 * 60 * 1000);
}

function computeStatus(school: SchoolDoc, now = new Date()): SubscriptionStatus {
  if (school.subscriptionStatus === "archived") return "archived";
  if (school.subscriptionStatus === "trial" && school.trialEndsAt < now) return "grace";
  if (school.subscriptionStatus === "grace" && school.graceEndsAt && school.graceEndsAt < now) return "archived";
  if (school.renewalDueAt && school.renewalDueAt < now) return "grace";
  return school.subscriptionStatus;
}

export async function evaluateSubscriptions(now = new Date()) {
  const schools = await storage.listSchools();
  await Promise.all(
    schools.map(async (school) => {
      const nextStatus = computeStatus(school, now);
      if (nextStatus === school.subscriptionStatus) return;
      const update: Partial<SchoolDoc> = { subscriptionStatus: nextStatus };
      if (nextStatus === "grace" && !school.graceEndsAt) {
        update.graceEndsAt = getGraceEndDate(now);
      }
      if (nextStatus === "archived") {
        update.archivedAt = now;
      }
      await storage.updateSchoolById(school._id!.toString(), update);
    }),
  );
}
