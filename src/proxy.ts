import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

import { connectDB } from "@/lib/mongodb";
import AdminSession from "@/models/AdminSession";

const ADMIN_COOKIE_NAME = "iswarya_admin_session";

async function isValidAdminSession(request: NextRequest) {
  try {
    const sessionToken =
      request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (!sessionToken) {
      return false;
    }

    await connectDB();

    const tokenHash = crypto
      .createHash("sha256")
      .update(sessionToken)
      .digest("hex");

    const session = await AdminSession.findOne({
      tokenHash,
      revokedAt: null,
    });

    if (!session) {
      return false;
    }

    if (session.expiresAt.getTime() <= Date.now()) {
      await AdminSession.deleteOne({
        _id: session._id,
      });

      return false;
    }

    return true;
  } catch (error) {
    console.error(
      "Admin proxy authentication error:",
      error
    );

    return false;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Login page should always be accessible
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect all admin pages
  if (pathname.startsWith("/admin")) {
    const authenticated =
      await isValidAdminSession(request);

    if (!authenticated) {
      const loginUrl =
        request.nextUrl.clone();

      loginUrl.pathname = "/admin/login";
      loginUrl.search = "";

      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};