import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSession = create(
  persist(
    (set) => ({
      session: null,
      isAuthed: false,
      signIn: (data) => {
        return new Promise((resolve, reject) => {
          const { user_id, password } = data;

          if (user_id && password) {
            set(() => ({
              session: { session_id: "ADFASFDASFA" },
              isAuthed: true,
            }));
            resolve();
            return;
          }
          reject();
        });
      },
      signOut: () => {
        set(() => ({ session: null, isAuthed: false }));
      },
    }),
    { name: "session" }
  )
);
