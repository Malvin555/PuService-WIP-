import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function getCurrentUser() {
  const cookieStore = await cookies(); // ✅ await here!
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded as { id: string; name: string; email: string; role: string };
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
}
