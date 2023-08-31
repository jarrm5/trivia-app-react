import "./App.css";
import { Button } from "./components/Button";
import { Question } from "./components/Question";
import { AnswerBank } from "./components/AnswerBank";
import { useState, useEffect } from "react";
import { Trivia } from "./props/Trivia.types";
import { AnswerObj } from "./props/AnswerBank.types";

function App() {
  const [triviaBank, setTriviaBank] = useState<Trivia[]>([]);

  useEffect(() => {
    fetch(
      "https://the-trivia-api.com/v2/questions?limit=15&categories=science,film_and_tv,music,history,geography,art_and_literature,sport_and_leisure,general_knowledge,science,food_and_drink&difficulties=easy,medium,hard"
    ).then((response) => response.json().then((data: Trivia[]) => setTriviaBank(data)));
  }, []);

  return (
    <div className="App">
      {triviaBank.map((trivia: Trivia) => {
        return (
          <div>
            <Question value={trivia.question.text}></Question>
            <AnswerBank
              answers={[
                ...trivia.incorrectAnswers.map((incorrectAnswer: string) => {
                  return { answer: incorrectAnswer, isCorrect: false };
                }),
                { answer: trivia.correctAnswer, isCorrect: true },
              ]}
            ></AnswerBank>
          </div>
        );
      })}
      <div className="btn-group btn-group-lg">
        <Button color={"dark"} label="Previous"></Button>
        <Button color={"dark"} label="Next"></Button>
      </div>
    </div>
  );
}

export default App;
