import { connectToMongoDB } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToMongoDB();
    return NextResponse.json({ message: "Connected to MongoDB!" });
  } catch (error) {
    console.error("API error:", error); // 👈 log the error
    return NextResponse.json(
      { error: "Failed to connect to MongoDB" },
      { status: 500 },
    );
  }
}
