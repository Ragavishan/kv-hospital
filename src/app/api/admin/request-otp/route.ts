import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";

import { connectDB } from "@/lib/mongodb";
import AdminOTP from "@/models/AdminOTP";

const OTP_EXPIRY_MINUTES = 5;
const OTP_LENGTH = 6;

function generateOTP() {
  return crypto
    .randomInt(0, 10 ** OTP_LENGTH)
    .toString()
    .padStart(OTP_LENGTH, "0");
}

function hashOTP(otp: string) {
  return crypto
    .createHash("sha256")
    .update(`${otp}:${process.env.OTP_SECRET}`)
    .digest("hex");
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const email = data.email?.trim().toLowerCase();
    const adminEmail =
      process.env.ADMIN_EMAIL?.trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
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
          message: "Admin OTP is not configured.",
        },
        { status: 500 }
      );
    }

    // Only the registered main admin email can request an OTP.
    if (email !== adminEmail) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This email is not authorized for admin access.",
        },
        { status: 401 }
      );
    }

    await connectDB();

    // Invalidate all previous unused OTPs.
    // We keep the records for history instead of deleting them.
    await AdminOTP.updateMany(
      {
        email: adminEmail,
        used: false,
      },
      {
        $set: {
          used: true,
        },
      }
    );

    const otp = generateOTP();
    const otpHash = hashOTP(otp);

    const expiresAt = new Date(
      Date.now() +
        OTP_EXPIRY_MINUTES * 60 * 1000
    );

    // Create the new active OTP.
    await AdminOTP.create({
      email: adminEmail,
      otpHash,
      expiresAt,
      attempts: 0,
      used: false,
    });

    const resendApiKey =
      process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error(
        "RESEND_API_KEY is missing."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from:
        "Iswarya Hospital Admin <onboarding@resend.dev>",
      to: [adminEmail],
      subject:
        "Iswarya Hospital Admin Login OTP",
      text: `Your Iswarya Hospital admin login OTP is ${otp}.

This OTP is valid for ${OTP_EXPIRY_MINUTES} minutes.

If you did not request this OTP, please ignore this email.`,
    });

    if (error) {
      console.error(
        "Resend email error:",
        error
      );

      // Invalidate the newly created OTP if email sending fails.
      await AdminOTP.updateMany(
        {
          email: adminEmail,
          used: false,
        },
        {
          $set: {
            used: true,
          },
        }
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to send OTP email.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "OTP sent successfully to your registered email.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Request OTP error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to generate OTP right now.",
      },
      { status: 500 }
    );
  }
}