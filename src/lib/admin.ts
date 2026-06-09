import { auth } from "@/auth";

export async function requireAdmin() {
  const session =
    await auth();

  if (!session?.user) {
    throw new Error(
      "Unauthorized"
    );
  }

  if (
    (session.user as any).role !==
    "ADMIN"
  ) {
    throw new Error(
      "Admin access required"
    );
  }

  return session;
}