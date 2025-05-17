import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out" });

  // Remove the token cookie
  response.cookies.set("token", "", {
    httpOnly: true,
    secure: false, // true in production
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return response;
}
