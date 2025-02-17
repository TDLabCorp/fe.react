import "./App.scss";

import { BrowserRouter, Route, Routes } from "react-router";
import { Front } from "./layout/Front";
import { SignIn } from "./layout/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Front />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
