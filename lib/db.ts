// lib/db.ts
import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectToMongoDB() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("❌ MONGODB_URI is not defined in .env.local");
    }

    const mongooseConnection = await mongoose.connect(uri);
    cachedConnection = mongooseConnection.connection;
    return cachedConnection;
  } catch (error) {
    throw error;
  }
}
