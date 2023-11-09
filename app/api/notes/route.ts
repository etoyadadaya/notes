import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { title, description } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!title) {
      return new NextResponse("Title is required!", { status: 400 });
    }

    const note = await db.note.create({
      data: {
        title,
        description,
        userId,
      },
    });

    return NextResponse.json(note);
  } catch (error) {
    console.log("[NOTES_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
