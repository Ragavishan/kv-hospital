import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMedicalRecord {
  reasonForVisit?: string;
  diagnosis?: string;
  treatment?: string;
  medicines?: string;
  tests?: string;
  finalResult?: string;
  doctorNotes?: string;
  followUpDate?: string;
  followUpInstructions?: string;
  updatedAt?: Date;
}

export interface IAppointment extends Document {
  name: string;
  phone: string;
  department: string;
  doctor: string;
  date: string;
  time: string;
  message?: string;

  status: "New" | "Confirmed" | "Completed" | "Cancelled";

  medicalRecord?: IMedicalRecord;

  createdAt: Date;
  updatedAt: Date;
}

const MedicalRecordSchema = new Schema<IMedicalRecord>(
  {
    reasonForVisit: {
      type: String,
      default: "",
      trim: true,
    },

    diagnosis: {
      type: String,
      default: "",
      trim: true,
    },

    treatment: {
      type: String,
      default: "",
      trim: true,
    },

    medicines: {
      type: String,
      default: "",
      trim: true,
    },

    tests: {
      type: String,
      default: "",
      trim: true,
    },

    finalResult: {
      type: String,
      default: "",
      trim: true,
    },

    doctorNotes: {
      type: String,
      default: "",
      trim: true,
    },

    followUpDate: {
      type: String,
      default: "",
      trim: true,
    },

    followUpInstructions: {
      type: String,
      default: "",
      trim: true,
    },

    updatedAt: {
      type: Date,
      default: null,
    },
  },
  {
    _id: false,
  }
);

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

    medicalRecord: {
      type: MedicalRecordSchema,
      default: undefined,
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