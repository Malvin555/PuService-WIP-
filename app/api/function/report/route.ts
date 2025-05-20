import { NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/db";
import Report from "@/models/Report";
import { Types } from "mongoose";

export async function POST(req: Request) {
  await connectToMongoDB();

  try {
    const body = await req.json();
    const {
      userId,
      categoryId,
      title,
      description,
      imageUrl = "",
      address,
    } = body;

    // Basic required fields validation
    if (!userId || !categoryId || !title || !description || !address) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 },
      );
    }

    // Validate ObjectId format
    if (![userId, categoryId].every((id) => Types.ObjectId.isValid(id))) {
      return NextResponse.json(
        { message: "Invalid userId or categoryId." },
        { status: 400 },
      );
    }

    // Create new report with ObjectId casting
    const newReport = await Report.create({
      userId: new Types.ObjectId(userId),
      categoryId: new Types.ObjectId(categoryId),
      title,
      description,
      imageUrl,
      address,
      status: "pending",
    });

    return NextResponse.json(newReport, { status: 201 });
  } catch (error: any) {
    console.error("Report create error:", error);
    return NextResponse.json(
      {
        message: "Something went wrong.",
        error: error.message || String(error),
      },
      { status: 500 },
    );
  }
}
