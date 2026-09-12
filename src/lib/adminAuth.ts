import crypto from "crypto";
import { cookies } from "next/headers";

import { connectDB } from "@/lib/mongodb";
import AdminSession from "@/models/AdminSession";

export const ADMIN_COOKIE_NAME = "iswarya_admin_session";

function hashSessionToken(token: string) {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
}

export async function getAdminSession() {
  try {
    const cookieStore = await cookies();

    const sessionToken =
      cookieStore.get(ADMIN_COOKIE_NAME)?.value;

    if (!sessionToken) {
      return null;
    }

    await connectDB();

    const tokenHash = hashSessionToken(sessionToken);

    const session = await AdminSession.findOne({
      tokenHash,
      revokedAt: null,
    });

    if (!session) {
      return null;
    }

    if (session.expiresAt.getTime() <= Date.now()) {
      await AdminSession.deleteOne({
        _id: session._id,
      });

      return null;
    }

    return session;
  } catch (error) {
    console.error("Admin session verification error:", error);
    return null;
  }
}

export async function isAdminAuthenticated() {
  const session = await getAdminSession();

  return Boolean(session);
}