"use client";

import { Note } from "@prisma/client";
import { useRouter } from "next/navigation";
import { NoteCard } from "@/app/(note)/components/note-card";

interface NoteListProps {
  notes: Note[];
}

export const NoteList = ({ notes }: NoteListProps) => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col gap-4">
      {notes.map((note) => (
        <NoteCard
          key={note.description}
          title={note.title}
          description={note.description}
          onClick={() => router.push(`/${note.id}`)}
        />
      ))}
    </div>
  );
};
