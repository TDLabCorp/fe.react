import { create } from "zustand";
import { persist } from "zustand/middleware";
import * as session from "../api/session";

export const useSession = create(
  persist(
    (set) => ({
      session: null,
      isAuthed: false,
      signIn: (data) => {
        return new Promise((resolve, reject) => {
          session.signIn(data).then(
            (User) => {
              console.log(JSON.stringify(User));
              set(() => ({
                session: User,
                isAuthed: true,
              }));
              resolve();
            },
            (reason) => {
              reject("로그인에 실패하였습니다.");
            }
          );
        });
      },
      signOut: () => {
        set(() => ({ session: null, isAuthed: false }));
      },
    }),
    { name: "session" }
  )
);
