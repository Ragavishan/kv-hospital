import { NextResponse } from "next/server";
import crypto from "crypto";

import { connectDB } from "@/lib/mongodb";
import AdminOTP from "@/models/AdminOTP";
import AdminSession from "@/models/AdminSession";

const ADMIN_COOKIE_NAME = "iswarya_admin_session";

const MAX_OTP_ATTEMPTS = 5;
const SESSION_DURATION_HOURS = 8;

function hashOTP(otp: string) {
  return crypto
    .createHash("sha256")
    .update(`${otp}:${process.env.OTP_SECRET}`)
    .digest("hex");
}

function hashSessionToken(token: string) {
  return crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
}

function createSessionToken() {
  return crypto.randomBytes(32).toString("hex");
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const email = data.email?.trim().toLowerCase();
    const otp = data.otp?.trim();

    const adminEmail =
      process.env.ADMIN_EMAIL?.trim().toLowerCase();

    if (!email || !otp) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and OTP are required.",
        },
        { status: 400 }
      );
    }

    if (!adminEmail || !process.env.OTP_SECRET) {
      console.error(
        "Admin OTP configuration is missing."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Admin authentication is not configured.",
        },
        { status: 500 }
      );
    }

    if (email !== adminEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized admin email.",
        },
        { status: 401 }
      );
    }

    if (!/^\d{6}$/.test(otp)) {
      return NextResponse.json(
        {
          success: false,
          message: "Enter a valid 6-digit OTP.",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const otpRecord = await AdminOTP.findOne({
      email: adminEmail,
      used: false,
    }).sort({ createdAt: -1 });

    if (!otpRecord) {
      return NextResponse.json(
        {
          success: false,
          message:
            "OTP expired or not found. Please request a new OTP.",
        },
        { status: 401 }
      );
    }

    if (otpRecord.expiresAt.getTime() <= Date.now()) {
      otpRecord.used = true;
      await otpRecord.save();

      return NextResponse.json(
        {
          success: false,
          message:
            "OTP has expired. Please request a new OTP.",
        },
        { status: 401 }
      );
    }

    if (otpRecord.attempts >= MAX_OTP_ATTEMPTS) {
      otpRecord.used = true;
      await otpRecord.save();

      return NextResponse.json(
        {
          success: false,
          message:
            "Too many incorrect attempts. Please request a new OTP.",
        },
        { status: 429 }
      );
    }

    const providedOTPHash = hashOTP(otp);

    const isValid = crypto.timingSafeEqual(
      Buffer.from(providedOTPHash, "hex"),
      Buffer.from(otpRecord.otpHash, "hex")
    );

    if (!isValid) {
      otpRecord.attempts += 1;

      if (otpRecord.attempts >= MAX_OTP_ATTEMPTS) {
        otpRecord.used = true;
      }

      await otpRecord.save();

      return NextResponse.json(
        {
          success: false,
          message: "Invalid OTP.",
        },
        { status: 401 }
      );
    }

    // OTP can be used only once
    otpRecord.used = true;
    await otpRecord.save();

    // Create secure random session token
    const sessionToken = createSessionToken();

    // Store only the hash in MongoDB
    const tokenHash = hashSessionToken(sessionToken);

    const expiresAt = new Date(
      Date.now() +
        SESSION_DURATION_HOURS * 60 * 60 * 1000
    );

    // Remove any previous active sessions for this admin
    await AdminSession.deleteMany({
      email: adminEmail,
    });

    // Create new secure session
    await AdminSession.create({
      email: adminEmail,
      tokenHash,
      expiresAt,
      revokedAt: null,
    });

    const response = NextResponse.json(
      {
        success: true,
        message: "Admin login successful.",
      },
      { status: 200 }
    );

    // Store raw token only in secure HTTP-only cookie
    response.cookies.set(
      ADMIN_COOKIE_NAME,
      sessionToken,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: SESSION_DURATION_HOURS * 60 * 60,
      }
    );

    return response;
  } catch (error) {
    console.error(
      "Verify OTP error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to verify OTP right now.",
      },
      { status: 500 }
    );
  }
}