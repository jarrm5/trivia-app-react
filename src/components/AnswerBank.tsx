import { useState } from "react";
import { AnswerObj } from "../props/AnswerBank.types";
import { Answer } from "./Answer";
import { AnswerBankProps } from "../props/AnswerBank.types";
import { Grid } from "@mui/material";
import { List } from "@mui/material";

export const AnswerBank = ({ answers }: AnswerBankProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
      {shuffleArray(answers).map((answer, index) => (
        <Grid xs={6}>
          <List>
            <Answer
              key={index}
              isCorrect={answer.isCorrect}
              prefix={String.fromCharCode(index + 65)}
              label={answer.answer}
              isSelected={selectedIndex === index}
              onSelect={() => {
                setSelectedIndex(index);
              }}
            ></Answer>
          </List>
        </Grid>
      ))}
    </Grid>
  );
};

function shuffleArray(arr: AnswerObj[]) {
  // Start from the last element and swap
  // one by one. We don't need to run for
  // the first element that's why i > 0
  for (let i = arr.length - 1; i > 0; i--) {
    // pick a random index from 0 to i inclusive
    const j = Math.floor(Math.random() * (i + 1)); // at random index
    // Swap arr[i] with the element
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
