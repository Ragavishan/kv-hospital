import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Appointment from "@/models/Appointment";

const allowedStatuses = [
  "New",
  "Confirmed",
  "Completed",
  "Cancelled",
] as const;

type AppointmentStatus = (typeof allowedStatuses)[number];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectDB();

    const appointment = await Appointment.findById(id).lean();

    if (!appointment) {
      return NextResponse.json(
        {
          success: false,
          message: "Appointment not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      appointment,
    });
  } catch (error) {
    console.error("Get appointment error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to fetch appointment.",
      },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const data = await request.json();

    const status = data.status as AppointmentStatus;

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid appointment status.",
        },
        { status: 400 }
      );
    }

    await connectDB();

    const appointment = await Appointment.findByIdAndUpdate(
      id,
      {
        status,
      },
      {
        new: true,
        runValidators: true,
      }
    ).lean();

    if (!appointment) {
      return NextResponse.json(
        {
          success: false,
          message: "Appointment not found.",
        },
        { status: 404 }
      );
    }

    console.log(
      `Appointment ${id} status updated to ${status}`
    );

    return NextResponse.json({
      success: true,
      message: "Appointment status updated successfully.",
      appointment,
    });
  } catch (error) {
    console.error("Update appointment status error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to update appointment status.",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectDB();

    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      return NextResponse.json(
        {
          success: false,
          message: "Appointment not found.",
        },
        { status: 404 }
      );
    }

    console.log(`Appointment deleted: ${id}`);

    return NextResponse.json({
      success: true,
      message: "Appointment deleted successfully.",
    });
  } catch (error) {
    console.error("Delete appointment error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to delete appointment.",
      },
      { status: 500 }
    );
  }
}