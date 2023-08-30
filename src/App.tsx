import "./App.css";
import { Button } from "./components/Button";
import { Question } from "./components/Question";
import { AnswerBank } from "./components/AnswerBank";
import { useState, useEffect } from "react";

function App() {
  const answers = [
    { answer: "Berlin", isCorrect: false },
    { answer: "Munich", isCorrect: false },
    { answer: "Frankfurt", isCorrect: false },
    { answer: "Nuremberg", isCorrect: true },
  ];

  const [triviaBank, setTriviaBank] = useState([]);

  useEffect(() => {
    fetch(
      "https://the-trivia-api.com/v2/questions?limit=10&categories=science,film_and_tv,music,history,geography,art_and_literature,sport_and_leisure,general_knowledge,science,food_and_drink&difficulties=easy,medium,hard"
    ).then((response) => response.json().then((data) => setTriviaBank(data)));
  }, []);

  return (
    <div className="App">
      {triviaBank.map((trivia) => {
        // return <Question value={trivia.question}></Question>;
        return null;
      })}
      {/* <Question>In 1945, which German city hosted the trials where former Nazi leaders were prosecuted for war crimes?</Question> */}
      <AnswerBank answers={answers}></AnswerBank>
      <div className="btn-group btn-group-lg">
        <Button color={"dark"} label="Previous"></Button>
        <Button color={"dark"} label="Next"></Button>
      </div>
    </div>
  );
}

export default App;
