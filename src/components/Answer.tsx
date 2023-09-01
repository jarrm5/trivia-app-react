import { AnswerProps } from "../props/Answer.types";
import { ListItemButton } from "@mui/material";

export const Answer = ({ prefix, label, isCorrect, isSelected, onSelect }: AnswerProps) => {
  return (
    <ListItemButton selected={isSelected}>
      <h5 onClick={onSelect}>
        {prefix}. {label} - {isCorrect.toString()}
      </h5>
    </ListItemButton>
  );
};
