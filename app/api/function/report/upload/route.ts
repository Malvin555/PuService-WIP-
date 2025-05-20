import { writeFile } from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json(
        { message: "No file uploaded." },
        { status: 400 },
      );
    }

    // Convert to Buffer for writeFile
    const buffer = Buffer.from(await file.arrayBuffer());

    // Generate unique filename
    const fileName = `${randomUUID()}_${file.name}`;

    // Construct absolute path for saving the file
    const filePath = path.join(process.cwd(), "public", "uploads", fileName);

    await writeFile(filePath, buffer);

    return NextResponse.json(
      { imageUrl: `/uploads/${fileName}` },
      { status: 200 },
    );
  } catch (error: unknown) {
    console.error("Upload error:", error);

    // Type guard to extract message safely
    const message = error instanceof Error ? error.message : String(error);

    return NextResponse.json(
      { message: "Upload failed", error: message },
      { status: 500 },
    );
  }
}
