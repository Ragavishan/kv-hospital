import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Appointment from "@/models/Appointment";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    await connectDB();

    const appointment = await Appointment.create({
      name: data.name,
      phone: data.phone,
      department: data.department,
      doctor: data.doctor,
      date: data.date,
      time: data.time,
      message: data.message || "",
    });

    console.log("Appointment saved:", appointment._id);

    return NextResponse.json(
      {
        success: true,
        message: "Appointment Request Sent",
        appointmentId: appointment._id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Appointment API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to save appointment right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}