import "./App.css";
import { Button } from "./components/Button";
import { Question } from "./components/Question";
import { AnswerBank } from "./components/AnswerBank";
import { useState, useEffect } from "react";
import { Trivia } from "./props/Trivia.types";
import { AnswerObj } from "./props/AnswerBank.types";
import Main from "./pages/Main";

function App() {
  const [triviaBank, setTriviaBank] = useState<Trivia[]>([]);

  useEffect(() => {
    fetch(
      "https://the-trivia-api.com/v2/questions?limit=15&categories=science,film_and_tv,music,history,geography,art_and_literature,sport_and_leisure,general_knowledge,science,food_and_drink&difficulties=easy,medium,hard"
    )
      .then((response) => response.json())
      .then((data: Trivia[]) => setTriviaBank(data));
  }, []);

  return (
    <div className="App">
      <Main />
      {triviaBank.map((trivia: Trivia) => {
        return (
          <div>
            <Question value={trivia.question.text}></Question>
            <AnswerBank
              answers={shuffleArray([
                ...trivia.incorrectAnswers.map((incorrectAnswer: string) => {
                  return { answer: incorrectAnswer, isCorrect: false };
                }),
                { answer: trivia.correctAnswer, isCorrect: true },
              ])}
            ></AnswerBank>
          </div>
        );
      })}
      <div className="btn-group btn-group-lg">
        <Button color={"dark"} label="Previous"></Button>
        <Button color={"dark"} label="Next"></Button>
      </div>
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
}

function shuffleArray(arr: AnswerObj[]) {
  // Start from the last element and swap
  // one by one. We don't need to run for
  // the first element that's why i > 0
  for (let i = arr.length - 1; i > 0; i--) {
    // pick a random index from 0 to i inclusive
    const j = Math.floor(Math.random() * (i + 1)); // at random index
    // Swap arr[i] with the element
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default App;
