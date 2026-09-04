import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI ?? "";

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

const globalForMongoose = globalThis as typeof globalThis & {
  mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

const cached = globalForMongoose.mongoose ?? {
  conn: null,
  promise: null,
};

globalForMongoose.mongoose = cached;

export async function connectDB() {
  console.log("🔄 Trying to connect to MongoDB...");

  if (cached.conn) {
    console.log("✅ Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔄 Creating new MongoDB connection...");

    cached.promise = mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 30_000,
      connectTimeoutMS: 30_000,
      socketTimeoutMS: 30_000,
      retryWrites: true,
      w: "majority",
    });
  }

  try {
    cached.conn = await cached.promise;

    console.log("✅ MongoDB connected successfully!");

    return cached.conn;
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);

    cached.promise = null;

    throw error;
  }
}