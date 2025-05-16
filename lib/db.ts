// lib/db.ts
import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectToMongoDB() {
  console.log("Mongo URI:", process.env.MONGODB_URI);

  if (cachedConnection) {
    console.log("✅ Using cached DB connection");
    return cachedConnection;
  }

  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("❌ MONGODB_URI is not defined in .env.local");
    }

    const mongooseConnection = await mongoose.connect(uri);
    cachedConnection = mongooseConnection.connection;
    console.log("✅ New MongoDB connection established");
    return cachedConnection;
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}
