import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/db";
import User from "@/models/User";
import Report from "@/models/Report";
import { getCurrentUser } from "@/lib/getCurrentUser";
import bcrypt from "bcrypt";

function sanitizeUser<T extends Record<string, unknown>>(
  user: T,
): Omit<T, "password"> {
  const { password: _password, ...rest } = user;
  void _password;
  return rest;
}

export async function GET() {
  await connectToMongoDB();

  try {
    const users = await User.find({}).lean();

    // Add reportsCount for each user
    const usersWithReports = await Promise.all(
      users.map(async (user) => {
        const reportsCount = await Report.countDocuments({ userId: user._id });
        return { ...sanitizeUser(user), reportsCount };
      }),
    );

    return NextResponse.json(usersWithReports, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  await connectToMongoDB();

  try {
    const formData = await req.formData();

    const name = formData.get("name") as string | null;
    const email = formData.get("email") as string | null;
    const phone = formData.get("phone_number") as string | null;
    const address = formData.get("address") as string | null;
    const password = formData.get("password") as string | null;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields: name, email or password" },
        { status: 400 },
      );
    }

    const existingUser = await User.findOne({ email }).lean();
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      role: "user",
    });

    await newUser.save();

    const userObject = newUser.toObject();
    const sanitizedUser = sanitizeUser(userObject);

    return NextResponse.json(sanitizedUser, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { message: "Failed to create user" },
      { status: 500 },
    );
  }
}

export async function PATCH(req: NextRequest) {
  await connectToMongoDB();

  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await req.formData();

    // Get allowed fields from the request
    const name = formData.get("name") as string | undefined;
    const email = formData.get("email") as string | undefined;
    const phone = formData.get("phone_number") as string | undefined;
    const address = formData.get("address") as string | undefined;
    const password = formData.get("password") as string | undefined;

    const updateData: Partial<{
      name: string;
      email: string;
      phone: string;
      address: string;
      password: string;
    }> = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (phone) updateData.phone = phone;
    if (address) updateData.address = address;

    // If password is provided, hash it before update
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    // **Do NOT allow role or other fields to be updated**

    const updatedUser = await User.findByIdAndUpdate(
      currentUser.id,
      updateData,
      { new: true },
    ).lean();

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Sanitize user before returning (remove password)
    if (Array.isArray(updatedUser)) {
      return NextResponse.json(
        { message: "Unexpected user data format" },
        { status: 500 },
      );
    }

    const sanitizedUser = sanitizeUser(updatedUser);

    return NextResponse.json(sanitizedUser, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { message: "Failed to update user" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("id");

  if (!userId)
    return NextResponse.json({ error: "Missing user ID" }, { status: 400 });

  try {
    await connectToMongoDB();
    await User.findByIdAndDelete(userId);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 },
    );
  }
}
