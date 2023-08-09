import { useState } from "react";
import { AnswerProps } from "../props/Answer.types";
import { Answer } from "./Answer";

const answers = [
  { answer: "Berlin", isCorrect: false },
  { answer: "Munich", isCorrect: false },
  { answer: "Frankfurt", isCorrect: false },
  { answer: "Nuremberg", isCorrect: true },
];

export const AnswerBank = () => {
  const [isAnswerMouseover, setIsAnswerMouseover] = useState(false);

  return (
    <ul className="list-group">
      {answers.map((answer, index) => (
        <li className="list-group-item" key={index}>
          <Answer
            // handleMouseover={setIsAnswerMouseover(!isAnswerMouseover)}
            isCorrect={answer.isCorrect}
            prefix={String.fromCharCode(index + 65)}
            label={answer.answer}
          ></Answer>
        </li>
      ))}
    </ul>
  );
};
