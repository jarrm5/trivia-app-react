import { ButtonProps } from "../props/Button.types";

export const Button = ({ label, color }: ButtonProps) => {
  return (
    <button type="button" className={`btn btn-${color}`}>
      {label}
    </button>
  );
};
