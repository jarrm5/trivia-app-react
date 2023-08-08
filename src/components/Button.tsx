import { ButtonProps } from "../props/Button.types";

export const Button = (props: ButtonProps) => {
  return <button>{props.children}</button>;
};
