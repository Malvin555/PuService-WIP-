import { connectToMongoDB } from "@/lib/db";
import Report from "@/models/Report";
import "@/models/Category";
import "@/models/User";

interface GetReportsOptions {
  userId?: string;
  limit?: number;
  includeUser?: boolean;
}

export async function getUserReports(options: GetReportsOptions = {}) {
  const { userId, limit, includeUser = false } = options;

  await connectToMongoDB();

  const filter = userId ? { userId } : {};

  let query = Report.find(filter)
    .sort({ createdAt: -1 })
    .populate("categoryId");

  if (includeUser) {
    query = query.populate({
      path: "userId",
      select: "_id name email",
    });
  }

  if (limit !== undefined) {
    query = query.limit(limit);
  }

  const reports = await query.exec();
  return JSON.parse(JSON.stringify(reports));
}
