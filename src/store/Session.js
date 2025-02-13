import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSession = create(
  persist(
    (set) => ({
      session: null,
      isAuthed: false,
      signIn: () => {
        set(() => ({ session: { session_id: "ADFASFDASFA" }, isAuthed: true }));
      },
      signOut: () => {
        set(() => ({ session: null, isAuthed: false }));
      },
    }),
    { name: "session" }
  )
);
