import mongoose, { Schema, Model, Document } from "mongoose";

export interface IAdminOTP extends Document {
  email: string;
  otpHash: string;
  expiresAt: Date;
  attempts: number;
  used: boolean;
  createdAt: Date;
}

const AdminOTPSchema = new Schema<IAdminOTP>(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    otpHash: {
      type: String,
      required: true,
    },

    expiresAt: {
      type: Date,
      required: true,
      index: true,
    },

    attempts: {
      type: Number,
      default: 0,
    },

    used: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Automatically remove expired OTP documents
AdminOTPSchema.index(
  { expiresAt: 1 },
  { expireAfterSeconds: 0 }
);

const AdminOTP: Model<IAdminOTP> =
  mongoose.models.AdminOTP ||
  mongoose.model<IAdminOTP>(
    "AdminOTP",
    AdminOTPSchema
  );

export default AdminOTP;