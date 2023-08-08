import { QuestionProps } from "../props/Question.types";

export const Question = (props: QuestionProps) => {
  return <div>{props.children}</div>;
};
