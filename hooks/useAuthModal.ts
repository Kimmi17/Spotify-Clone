import { create } from "zustand";

interface AuthModalStore {
  isOpen: boolean;
  isSignUp: boolean;
  onOpen: (isSignUp?: boolean) => void;
  onClose: () => void;
}

const useAuthModal = create<AuthModalStore>((set) => ({
  isOpen: false,
  isSignUp: false,
  onOpen: (isSignUp?: boolean) => set({ isOpen: true, isSignUp: !!isSignUp }),
  onClose: () => set({ isOpen: false, isSignUp: false }),
}));

export default useAuthModal;
