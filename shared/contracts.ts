export type UserRole = "platform_admin" | "school_owner_admin";
export type PackageTier = "free" | "premium";
export type SubscriptionStatus = "trial" | "active" | "grace" | "archived";

export interface UserSessionPayload {
  userId: string;
  role: UserRole;
  schoolId?: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    schoolId?: string;
  };
}
