"use client";

import { Button } from "@/components/ui/button";
import { useNoteModal } from "@/hooks/use-note-modal";

export const CreateNote = () => {
  const onOpen = useNoteModal((state) => state.onOpen);

  return (
    <div>
      <Button className="h-[50px] w-[200px]" variant="outline" onClick={onOpen}>
        Create note
      </Button>
    </div>
  );
};
