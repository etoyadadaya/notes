import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { noteId: string } }
) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { title, description } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!params.noteId) {
      return new NextResponse("Note id is required!", { status: 400 });
    }

    const note = await db.note.updateMany({
      where: {
        id: params.noteId,
        userId,
      },
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(note);
  } catch (error) {
    console.log("[NOTES_PATCH]");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { noteId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!params.noteId) {
      return new NextResponse("Note id is required!", { status: 400 });
    }

    const note = await db.note.deleteMany({
      where: {
        id: params.noteId,
        userId,
      },
    });

    return NextResponse.json(note);
  } catch (error) {
    console.log("[NOTES_DELETE]");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
