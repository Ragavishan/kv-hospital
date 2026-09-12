import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import Appointment from "@/models/Appointment";
import { isAdminAuthenticated } from "@/lib/adminAuth";

/* =========================================================
   GET APPOINTMENTS
   Admin only
========================================================= */

export async function GET() {
  try {
    const authenticated =
      await isAdminAuthenticated();

    if (!authenticated) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Unauthorized. Admin login required.",
        },
        { status: 401 }
      );
    }

    await connectDB();

    console.log(
      "✅ MongoDB connected successfully!"
    );

    const appointments = await Appointment.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(
      {
        success: true,
        appointments,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Fetch Appointments Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to fetch appointments.",
      },
      { status: 500 }
    );
  }
}

/* =========================================================
   CREATE APPOINTMENT
   Public
========================================================= */

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const requiredFields = [
      "name",
      "phone",
      "department",
      "doctor",
      "date",
      "time",
    ] as const;

    const missingField = requiredFields.some(
      (field) =>
        typeof data[field] !== "string" ||
        !data[field].trim()
    );

    if (missingField) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please complete all required appointment fields.",
        },
        { status: 400 }
      );
    }

    await connectDB();

    console.log(
      "✅ MongoDB connected successfully!"
    );

    const appointment = await Appointment.create({
      name: data.name.trim(),
      phone: data.phone.trim(),
      department: data.department.trim(),
      doctor: data.doctor.trim(),
      date: data.date.trim(),
      time: data.time.trim(),
      message:
        typeof data.message === "string"
          ? data.message.trim()
          : "",
    });

    console.log(
      "Appointment saved:",
      appointment._id.toString()
    );

    return NextResponse.json(
      {
        success: true,
        message: "Appointment Request Sent",
        appointmentId: appointment._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Appointment API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to save appointment right now.",
      },
      { status: 500 }
    );
  }
}