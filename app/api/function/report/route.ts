import { NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/db";
import Report from "@/models/Report";
import { Types } from "mongoose";

// Handle GET request - fetch all reports
export async function GET(req: Request) {
  await connectToMongoDB();

  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const status = searchParams.get("status");
    const category = searchParams.get("category");
    const search = searchParams.get("search");

    const filter: Record<string, unknown> = {};
    if (userId) filter.userId = userId;
    if (status && status !== "all") filter.status = status;
    if (category && category !== "all") filter.categoryId = category;

    if (search && search.trim() !== "") {
      filter.$or = [
        { title: { $regex: search.trim(), $options: "i" } },
        { description: { $regex: search.trim(), $options: "i" } },
      ];
    }

    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");

    let reports;
    let totalReports = 0;
    let page = 1;
    let totalPages = 1;

    if (pageParam && limitParam) {
      page = parseInt(pageParam, 10);
      const limit = parseInt(limitParam, 10);
      const skip = (page - 1) * limit;

      reports = await Report.find(filter)
        .populate("userId", "_id name email")
        .populate("categoryId")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      totalReports = await Report.countDocuments(filter);
      totalPages = Math.ceil(totalReports / limit);
    } else {
      reports = await Report.find(filter)
        .populate("userId", "_id name email")
        .populate("categoryId")
        .sort({ createdAt: -1 });
      totalReports = reports.length;
    }

    return NextResponse.json(
      {
        reports,
        page,
        totalPages,
        totalReports,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching reports:", error);
    return NextResponse.json(
      { message: "Error fetching reports." },
      { status: 500 },
    );
  }
}

// Handle POST request - create new report
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

    if (!userId || !categoryId || !title || !description || !address) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 },
      );
    }

    if (![userId, categoryId].every((id) => Types.ObjectId.isValid(id))) {
      return NextResponse.json(
        { message: "Invalid userId or categoryId." },
        { status: 400 },
      );
    }

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
  } catch (error: unknown) {
    console.error("Report create error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong.";

    return NextResponse.json(
      { message: "Something went wrong.", error: errorMessage },
      { status: 500 },
    );
  }
}
