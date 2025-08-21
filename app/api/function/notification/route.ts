import { connectToMongoDB } from "@/lib/db";
import Notification from "@/models/Notification";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { UserType } from "@/types/User";
import { NotificationType } from "@/types/Notification";

export async function GET() {
  await connectToMongoDB();

  try {
    // Tell TS what type `.lean()` returns
    const notifications = await Notification.find()
      .sort({ sentAt: -1 })
      .lean<NotificationType[]>();

    const serialized = notifications.map((n) => ({
      _id: n._id!.toString(), // '!' tells TS _id exists
      user: n.user,
      message: n.message,
      sentAt: n.sentAt.toISOString(),
    }));

    return NextResponse.json(serialized, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to fetch notifications" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  const { userId, message } = await req.json();

  if (!userId || !message) {
    return NextResponse.json(
      { error: "User and message are required." },
      { status: 400 },
    );
  }

  await connectToMongoDB();

  // Type the user explicitly
  const user = await User.findOne({
    _id: userId,
    role: "user",
  }).lean<UserType>();
  if (!user) {
    return NextResponse.json(
      { error: "User not found or not allowed." },
      { status: 404 },
    );
  }

  const notification = await Notification.create({
    user: user.name, // TS now knows `name` exists
    message,
    sentAt: new Date(),
  });

  return NextResponse.json(
    {
      _id: notification._id.toString(),
      user: notification.user,
      message: notification.message,
      sentAt: notification.sentAt.toISOString(),
    },
    { status: 201 },
  );
}
