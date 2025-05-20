import { NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/db";
import Category from "@/models/Category";

// POST /api/function/category - create new category
export async function POST(req: Request) {
  await connectToMongoDB();

  try {
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json(
        { message: "Category name is required." },
        { status: 400 },
      );
    }

    const newCategory = await Category.create({ name });
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating category", error },
      { status: 500 },
    );
  }
}

// ✅ GET /api/function/category - fetch all categories
export async function GET() {
  await connectToMongoDB();

  try {
    const categories = await Category.find();
    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch categories", error },
      { status: 500 },
    );
  }
}
