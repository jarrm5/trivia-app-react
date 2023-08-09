import { AnswerProps } from "../props/Answer.types";

export const Answer = ({ prefix, label, isCorrect }: AnswerProps) => {
  return (
    <h5>
      {prefix}. {label}
    </h5>
  );
};
