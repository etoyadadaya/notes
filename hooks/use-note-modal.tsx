import { create } from "zustand";

interface useNoteModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useNoteModal = create<useNoteModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
