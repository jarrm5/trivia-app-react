import { AnswerProps } from "../props/Answer.types";

export const Answer = (props: AnswerProps) => {
  return <h4>{props.children}</h4>;
};
