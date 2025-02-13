import React from "react";

import { If, Then, Else } from "react-if";
import { useSession } from "./store/Session";

import "./App.css";
import { Authed } from "./layout/Authed";
import { UnAuthed } from "./layout/UnAuthed";

function App() {
  const isAuthed = useSession((state) => state.isAuthed);
  return (
    <div className="App">
      <If condition={isAuthed}>
        <Then>
          <Authed />
        </Then>
        <Else>
          <UnAuthed></UnAuthed>
        </Else>
      </If>
    </div>
  );
}

export default App;
