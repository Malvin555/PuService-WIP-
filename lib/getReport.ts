import { connectToMongoDB } from "@/lib/db";
import Report from "@/models/Report";
import "@/models/Category";
import "@/models/User"; // Ensure User model is imported if not already

interface GetReportsOptions {
  userId?: string;
  limit?: number;
  includeUser?: boolean; // true for workers
}

export async function getUserReports(options: GetReportsOptions = {}) {
  const { userId, limit = 3, includeUser = false } = options;

  await connectToMongoDB();

  const filter = userId ? { userId } : {};

  let query = Report.find(filter)
    .sort({ createdAt: -1 })
    .populate("categoryId");

  if (includeUser) {
    query = query.populate({
      path: "userId",
      select: "_id name email", // limit fields shown for user
    });
  }

  if (limit) {
    query = query.limit(limit);
  }

  const reports = await query.exec();
  return JSON.parse(JSON.stringify(reports));
}
