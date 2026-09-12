import mongoose, { Document, Model, Schema } from "mongoose";

export interface IAdminSession extends Document {
  email: string;
  tokenHash: string;
  expiresAt: Date;
  revokedAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const AdminSessionSchema = new Schema<IAdminSession>(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    tokenHash: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    expiresAt: {
      type: Date,
      required: true,
      index: true,
    },

    revokedAt: {
      type: Date,
      default: null,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Automatically remove expired sessions from MongoDB
AdminSessionSchema.index(
  { expiresAt: 1 },
  { expireAfterSeconds: 0 }
);

const AdminSession: Model<IAdminSession> =
  mongoose.models.AdminSession ||
  mongoose.model<IAdminSession>(
    "AdminSession",
    AdminSessionSchema
  );

export default AdminSession;