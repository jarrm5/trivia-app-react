import { QuestionProps } from "../props/Question.types";

export const Question = (props: QuestionProps) => {
  return <h4>{props.value}</h4>;
};
