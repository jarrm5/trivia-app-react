import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { Question } from "./components/Question";
import { AnswerBank } from "./components/AnswerBank";

function App() {
  const answers = [
    { answer: "Berlin", isCorrect: false },
    { answer: "Munich", isCorrect: false },
    { answer: "Frankfurt", isCorrect: false },
    { answer: "Nuremberg", isCorrect: true },
  ];

  return (
    <div className="App">
      <Question>In 1945, which German city hosted the trials where former Nazi leaders were prosecuted for war crimes?</Question>
      <AnswerBank answers={answers}></AnswerBank>
      <div className="btn-group btn-group-lg">
        <Button color={"dark"} label="Previous"></Button>
        <Button color={"dark"} label="Next"></Button>
      </div>
    </div>
  );
}

export default App;
