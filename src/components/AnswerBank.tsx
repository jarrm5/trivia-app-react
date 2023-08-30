import { useState } from "react";
import { AnswerProps } from "../props/Answer.types";
import { Answer } from "./Answer";
import { AnswerBankProps } from "../props/AnswerBank.types";
import { Grid } from "@mui/material";
import { List } from "@mui/material";

export const AnswerBank = ({ answers }: AnswerBankProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
      {answers.map((answer, index) => (
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
