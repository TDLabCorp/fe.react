import { useSession } from "../store/Session";

export function UnAuthed() {
  const signIn = useSession((state) => state.signIn);
  return (
    <div>
      <button onClick={() => signIn()}>Sign button</button>
    </div>
  );
}
