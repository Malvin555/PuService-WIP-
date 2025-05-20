// lib/getUserReport.ts
import { connectToMongoDB } from "@/lib/db";
import Report from "@/models/Report";

export async function getUserReports(userId: string, limit: number = 3) {
  await connectToMongoDB();
  const reports = await Report.find({ userId })
    .sort({ createdAt: -1 })
    .limit(limit) // use the passed limit here
    .populate("categoryId");

  return JSON.parse(JSON.stringify(reports));
}
