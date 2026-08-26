import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAppointment extends Document {
  name: string;
  phone: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  message?: string;
  status: "New" | "Confirmed" | "Completed" | "Cancelled";
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
      trim: true,
    },

    doctor: {
      type: String,
      required: true,
      trim: true,
    },

    date: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      default: "",
      trim: true,
    },

    status: {
      type: String,
      enum: ["New", "Confirmed", "Completed", "Cancelled"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const Appointment: Model<IAppointment> =
  mongoose.models.Appointment ||
  mongoose.model<IAppointment>("Appointment", AppointmentSchema);

export default Appointment;