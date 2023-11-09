import db from "@/lib/db";

export default async function NoteIdPage({
  params,
}: {
  params: { noteId: string };
}) {
  const note = await db.note.findUnique({
    where: {
      id: params.noteId,
    },
  });

  return (
    <div>
      <p>{note?.title}</p>
    </div>
  );
}
