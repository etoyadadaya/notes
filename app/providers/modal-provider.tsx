"use client";

import { useEffect, useState } from "react";

import { NoteModal } from "@/components/modals/note-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <NoteModal />
    </>
  );
};
