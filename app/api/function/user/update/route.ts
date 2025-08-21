import {NextRequest, NextResponse} from "next/server";
import bcrypt from "bcrypt";
import {connectToMongoDB} from "@/lib/db";
import User from "@/models/User";

// Helper to remove sensitive fields
function sanitizeUser<T extends Record<string, unknown>>(
    user: T,
): Omit<T, "password"> {
    const {password: _password, ...rest} = user;
    void _password;
    return rest;
}

export async function PATCH(req: NextRequest) {
    await connectToMongoDB();

    const {searchParams} = new URL(req.url);
    const userId = searchParams.get("id");
    if (!userId) {
        return NextResponse.json({message: "Missing user ID"}, {status: 400});
    }

    try {
        const body = await req.json();
        const {name, email, phone, address, password, role} = body;

        const updateData: Partial<{
            name: string;
            email: string;
            phone: string;
            address: string;
            password: string;
            role: string;
        }> = {};

        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (phone) updateData.phone = phone;
        if (address) updateData.address = address;
        if (password) updateData.password = await bcrypt.hash(password, 10);
        if (role) updateData.role = role;

        const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
            new: true,
        })
            .lean()
            .exec() as Record<string, unknown> | null; // 👈 force type here

        if (!updatedUser) {
            return NextResponse.json({message: "User not found"}, {status: 404});
        }

        const sanitizedUser = sanitizeUser(updatedUser);
        return NextResponse.json(sanitizedUser, {status: 200});
    } catch (err) {
        console.error("Error updating user:", err);
        return NextResponse.json(
            {message: "Failed to update user"},
            {status: 500},
        );
    }
}
