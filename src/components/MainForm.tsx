import {
  TextField,
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Radio,
  ButtonGroup,
  Button,
} from "@mui/material";
import { useState } from "react";
import { MainFormProps } from "../props/MainForm.types";
import { MainFormCheckbox } from "../props/MainFormCheckBox.types";

export const MainForm = (props: MainFormProps) => {
  const radios: string[] = ["Easy", "Medium", "Hard"];

  const checkboxes: MainFormCheckbox[] = [
    { name: "music", label: "Music", handleCheckboxChecked: handleCheckboxChecked },
    { name: "history", label: "History", handleCheckboxChecked: handleCheckboxChecked },
    { name: "geography", label: "Geography", handleCheckboxChecked: handleCheckboxChecked },
    { name: "art_and_literature", label: "Art & Literature", handleCheckboxChecked: handleCheckboxChecked },
    { name: "sport_and_leisure", label: "Sports & Leisure", handleCheckboxChecked: handleCheckboxChecked },
    { name: "general_knowledge", label: "General Knowledge", handleCheckboxChecked: handleCheckboxChecked },
    { name: "food_and_drink", label: "Food & Drink", handleCheckboxChecked: handleCheckboxChecked },
  ];

  function handleCheckboxChecked(e: React.ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    //if (e.target.checked && categories.indexOf(name) === -1) {
    if (e.target.checked) {
      setCategories([...categories, name]);
    } else {
      setCategories(
        categories.filter((category) => {
          return category !== name;
        })
      );
    }
  }

  function resetForm() {
    setName("");
    setDifficulty("easy");
    setCategories([]);
  }

  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("easy");
  const [categories, setCategories] = useState<string[]>([]);

  const { handleSubmit } = props;

  return (
    <form>
      <div className="input-field">
        <FormControl>
          <FormLabel id="name">Enter Name: </FormLabel>
          <TextField id="name" variant="standard" onChange={(e) => setName(e.target.value)} value={name} />
        </FormControl>
      </div>
      <div className="input-field">
        <FormControl>
          <FormLabel id="difficulty">Difficulty</FormLabel>
          <RadioGroup aria-labelledby="difficulty" defaultValue="easy" name="difficulty-group">
            {radios.map((radioStr: string) => {
              return (
                <FormControlLabel
                  key={radioStr}
                  value={radioStr.toLocaleLowerCase()}
                  control={<Radio />}
                  onChange={(e) => {
                    setDifficulty(radioStr.toLocaleLowerCase());
                  }}
                  label={radioStr}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </div>
      <div className="input-field">
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Select Categories</FormLabel>
          <FormGroup>
            {checkboxes.map((checkbox: MainFormCheckbox) => {
              const { name, label, handleCheckboxChecked } = checkbox;
              return (
                <FormControlLabel
                  key={name}
                  control={
                    <Checkbox
                      onChange={(e) => {
                        {
                          handleCheckboxChecked(e);
                        }
                      }}
                      name={name}
                    />
                  }
                  label={label}
                />
              );
            })}
          </FormGroup>
        </FormControl>
      </div>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={resetForm}>Reset</Button>
        <Button onClick={() => handleSubmit(name, difficulty, categories)}>Submit</Button>
      </ButtonGroup>
    </form>
  );
};

export default MainForm;
