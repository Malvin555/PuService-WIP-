import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const protectedPaths = ["/admin", "/worker", "/user"];
const publicAuthPaths = ["/auth/login", "/auth/register", "/landing"];

function getJwtSecretKey() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("Missing JWT_SECRET");
  return new TextEncoder().encode(secret);
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  let role: string | null = null;

  if (token) {
    try {
      const { payload } = await jwtVerify(token, getJwtSecretKey());
      // Type assertion here
      role = (payload as { role?: string }).role ?? null;
    } catch (err) {
      console.error("Invalid token:", err);
      role = null;
    }
  }

  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    if (!role) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
    if (
      (pathname.startsWith("/admin") && role !== "admin") ||
      (pathname.startsWith("/worker") && role !== "worker") ||
      (pathname.startsWith("/user") && role !== "user")
    ) {
      return NextResponse.redirect(new URL(`/${role}`, req.url));
    }
  }

  if (publicAuthPaths.includes(pathname) && role) {
    return NextResponse.redirect(new URL(`/${role}`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/worker/:path*",
    "/user/:path*",
    "/auth/login",
    "/auth/register",
    "/landing",
  ],
};
