import { useSession } from "../store/Session";
import { EditorGroups } from "./EditorGroups";
import { SideBar } from "./SideBar";
import { StatusBar } from "./StatusBar";

export function Authed() {
  const signOut = useSession((state) => state.signOut);
  return (
    <div style={{ width: "100%" }}>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <td colSpan={2}>
              <button onClick={() => signOut()}>signOut button122</button>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <SideBar />
            </td>
            <td>
              <EditorGroups />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>
              <StatusBar />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
