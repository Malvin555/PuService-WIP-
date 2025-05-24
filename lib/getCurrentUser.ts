import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { connectToMongoDB } from "@/lib/db";
import User from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };

    await connectToMongoDB();

    // Use findById, NOT find, to get a single user document
    const userDoc = await User.findById(decoded.id).select("-password").lean();

    if (!userDoc) return null;

    return {
      id: userDoc._id.toString(),
      name: userDoc.name,
      email: userDoc.email,
      role: userDoc.role,
      phone: userDoc.phone || "",
      address: userDoc.address || "",
    };
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}
