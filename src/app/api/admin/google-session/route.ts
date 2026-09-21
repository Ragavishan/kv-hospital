import { NextResponse } from "next/server";
import crypto from "crypto";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/authOptions";
import { connectDB } from "@/lib/mongodb";
import AdminSession from "@/models/AdminSession";

const ADMIN_COOKIE_NAME = "iswarya_admin_session";
const SESSION_DURATION_HOURS = 8;

function createSessionToken() {
  return crypto.randomBytes(32).toString("hex");
}

function hashSessionToken(token: string) {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
}

export async function GET(request: Request) {
  try {
    // Verify the actual NextAuth Google session
    const session = await getServerSession(authOptions);

    const googleEmail =
      session?.user?.email?.trim().toLowerCase();

    const adminEmail =
      process.env.ADMIN_EMAIL?.trim().toLowerCase();

    if (!googleEmail || !adminEmail) {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }

    // Final server-side authorization check
    if (googleEmail !== adminEmail) {
      return NextResponse.redirect(
        new URL("/admin/login", request.url)
      );
    }

    await connectDB();

    const sessionToken = createSessionToken();
    const tokenHash = hashSessionToken(sessionToken);

    const expiresAt = new Date(
      Date.now() +
        SESSION_DURATION_HOURS * 60 * 60 * 1000
    );

    // Remove previous admin sessions
    await AdminSession.deleteMany({
      email: adminEmail,
    });

    // Create the session used by the existing admin system
    await AdminSession.create({
      email: adminEmail,
      tokenHash,
      expiresAt,
      revokedAt: null,
    });

    const response = NextResponse.redirect(
      new URL("/admin/appointments", request.url)
    );

    response.cookies.set(
      ADMIN_COOKIE_NAME,
      sessionToken,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge:
          SESSION_DURATION_HOURS * 60 * 60,
      }
    );

    return response;
  } catch (error) {
    console.error(
      "Google admin session error:",
      error
    );

    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }
}