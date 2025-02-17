import { Container } from "react-bootstrap";
import { StatusBar } from "./StatusBar";
import ResponsiveNavbar from "./ResponsiveNavbar";
import { Route, Routes } from "react-router";
import Profile from "./Profile";
import Document from "./Document";

export const Front = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ResponsiveNavbar />
      <Routes>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/document/*" element={<Document />}></Route>
      </Routes>

      <StatusBar />
    </div>
  );
};
