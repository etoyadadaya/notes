import db from "@/lib/db";
import { NoteList } from "@/app/(note)/components/note-list";
import { CreateNote } from "@/app/(note)/components/create-note";

export default async function Home() {
  const notes = await db.note.findMany();

  return (
    <div className="flex w-[400px] flex-col gap-4 p-6">
      <NoteList notes={notes} />
      <div className="flex items-center justify-center">
        <CreateNote />
      </div>
    </div>
  );
}
