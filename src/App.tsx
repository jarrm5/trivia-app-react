import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button";
import { Question } from "./components/Question";
import { Answer } from "./components/Answer";

function App() {
  return (
    <div className="App">
      <Question>In 1945, which German city hosted the trials where former Nazi leaders were prosecuted for war crimes?</Question>
      <Answer>Frankfurt</Answer>
      <Answer>Berlin</Answer>
      <Answer>Nuremburg</Answer>
      <Answer>Munich</Answer>
      <Button>{"Submit Answer"}</Button>
    </div>
  );
}

export default App;
