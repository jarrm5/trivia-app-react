import { useState } from "react";
import { AnswerProps } from "../props/Answer.types";
import { Answer } from "./Answer";
import { AnswerBankProps } from "../props/AnswerBank.types";

export const AnswerBank = ({ answers }: AnswerBankProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <ul className="list-group">
      {answers.map((answer, index) => (
        <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={index}>
          <Answer
            isCorrect={answer.isCorrect}
            prefix={String.fromCharCode(index + 65)}
            label={answer.answer}
            onSelect={() => {
              setSelectedIndex(index);
            }}
          ></Answer>
        </li>
      ))}
    </ul>
  );
};
