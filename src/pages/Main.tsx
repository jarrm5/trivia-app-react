import { useState, useEffect } from "react";
import { Options } from "../props/Options.types";
//import mainLogo from "../main_logo.jpeg";
import MainForm from "../components/MainForm";
import { Trivia } from "../props/Trivia.types";
import { AnswerObj } from "../props/AnswerBank.types";
//import { Question } from "../components/Question";
//import { AnswerBank } from "../components/AnswerBank";

export const Main = () => {
  const [options, setOptions] = useState<Options>();
  const [triviaBank, setTriviaBank] = useState<Trivia[]>([]);

  useEffect(() => {
    if (options) {
      fetch(
        `https://the-trivia-api.com/v2/questions?limit=15&categories=${options?.categories.join(",")}&difficulties=${options?.difficulty}`
      )
        .then((response) => response.json())
        .then((data: Trivia[]) => setTriviaBank(data));
    }
  }, [options]);

  return (
    <div className="form-container">
      {/* <img src={mainLogo} alt="main logo" /> */}
      <MainForm handleSubmit={handleSubmit} />
      {triviaBank.map((trivia: Trivia) => {
        return (
          <div>
            {/* <Question value={trivia.question.text}></Question>
            <AnswerBank
              answers={shuffleArray([
                ...trivia.incorrectAnswers.map((incorrectAnswer: string) => {
                  return { answer: incorrectAnswer, isCorrect: false };
                }),
                { answer: trivia.correctAnswer, isCorrect: true },
              ])}
            ></AnswerBank> */}
          </div>
        );
      })}
    </div>
  );

  function handleSubmit(name: string, difficulty: string, categories: string[]) {
    setOptions({ name: name, difficulty: difficulty, categories: categories });
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
};

export default Main;
