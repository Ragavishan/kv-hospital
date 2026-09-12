import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

import { connectDB } from "@/lib/mongodb";
import AdminSession from "@/models/AdminSession";

const ADMIN_COOKIE_NAME = "iswarya_admin_session";

export async function POST(request: NextRequest) {
  try {
    const sessionToken =
      request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (sessionToken) {
      await connectDB();

      const tokenHash = crypto
        .createHash("sha256")
        .update(sessionToken)
        .digest("hex");

      await AdminSession.updateOne(
        {
          tokenHash,
          revokedAt: null,
        },
        {
          $set: {
            revokedAt: new Date(),
          },
        }
      );
    }

    const response = NextResponse.json(
      {
        success: true,
        message: "Logged out successfully.",
      },
      { status: 200 }
    );

    response.cookies.set(
      ADMIN_COOKIE_NAME,
      "",
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 0,
      }
    );

    return response;
  } catch (error) {
    console.error(
      "Admin logout API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Unable to logout.",
      },
      { status: 500 }
    );
  }
}