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

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

/* =========================================================
   GET SINGLE APPOINTMENT
========================================================= */

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

/* =========================================================
   PATCH APPOINTMENT
   Status + Medical Record
========================================================= */

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const data = await request.json();

    await connectDB();

    const existingAppointment =
      await Appointment.findById(id);

    if (!existingAppointment) {
      return NextResponse.json(
        {
          success: false,
          message: "Appointment not found.",
        },
        { status: 404 }
      );
    }

    /* =====================================================
       STATUS UPDATE
    ===================================================== */

    if (data.status !== undefined) {
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

      existingAppointment.status = status;
    }

    /* =====================================================
       MEDICAL RECORD UPDATE
    ===================================================== */

    if (
      data.medicalRecord &&
      typeof data.medicalRecord === "object"
    ) {
      const medicalRecord = data.medicalRecord;

      existingAppointment.medicalRecord = {
        reasonForVisit: cleanString(
          medicalRecord.reasonForVisit
        ),

        diagnosis: cleanString(
          medicalRecord.diagnosis
        ),

        treatment: cleanString(
          medicalRecord.treatment
        ),

        medicines: cleanString(
          medicalRecord.medicines
        ),

        tests: cleanString(
          medicalRecord.tests
        ),

        finalResult: cleanString(
          medicalRecord.finalResult
        ),

        doctorNotes: cleanString(
          medicalRecord.doctorNotes
        ),

        followUpDate: cleanString(
          medicalRecord.followUpDate
        ),

        followUpInstructions: cleanString(
          medicalRecord.followUpInstructions
        ),

        updatedAt: new Date(),
      };
    }

    await existingAppointment.save();

    const updatedAppointment =
      await Appointment.findById(id).lean();

    console.log(
      `Appointment ${id} updated successfully`
    );

    return NextResponse.json({
      success: true,
      message:
        "Appointment updated successfully.",
      appointment: updatedAppointment,
    });
  } catch (error) {
    console.error(
      "Update appointment error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to update appointment.",
      },
      { status: 500 }
    );
  }
}

/* =========================================================
   DELETE APPOINTMENT
========================================================= */

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await connectDB();

    const appointment =
      await Appointment.findByIdAndDelete(id);

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
      message:
        "Appointment deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Delete appointment error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to delete appointment.",
      },
      { status: 500 }
    );
  }
}