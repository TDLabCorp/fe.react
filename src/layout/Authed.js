// import { useSession } from "../store/Session";
import { Container } from "react-bootstrap";
// import { EditorGroups } from "./EditorGroups";
// import { SideBar } from "./SideBar";
import { StatusBar } from "./StatusBar";
import ResponsiveNavbar from "./ResponsiveNavbar";

export function Authed() {
  // const signOut = useSession((state) => state.signOut);
  return (
    <div className="d-flex flex-column min-vh-100">
      <ResponsiveNavbar />
      <Container className="mt-5"></Container>

      <StatusBar />
    </div>
  );
}
