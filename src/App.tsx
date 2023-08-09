import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { Question } from "./components/Question";
import { AnswerBank } from "./components/AnswerBank";

function App() {
  return (
    <div className="App">
      <Question>In 1945, which German city hosted the trials where former Nazi leaders were prosecuted for war crimes?</Question>
      <AnswerBank></AnswerBank>
      <Button color={"dark"} label="Submit"></Button>
    </div>
  );
}

export default App;
