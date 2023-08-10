import { AnswerProps } from "../props/Answer.types";

export const Answer = ({ prefix, label, isCorrect, onSelect }: AnswerProps) => {
  return (
    <h5 onClick={onSelect}>
      {prefix}. {label}
    </h5>
  );
};
