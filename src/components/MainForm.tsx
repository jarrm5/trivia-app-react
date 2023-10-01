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
  const checkboxes: MainFormCheckbox[] = [
    { name: "music", label: "Music", handleChecked: handleChecked },
    { name: "history", label: "History", handleChecked: handleChecked },
    { name: "geography", label: "Geography", handleChecked: handleChecked },
    { name: "art_and_literature", label: "Art & Literature", handleChecked: handleChecked },
    { name: "sport_and_leisure", label: "Sports & Leisure", handleChecked: handleChecked },
    { name: "general_knowledge", label: "General Knowledge", handleChecked: handleChecked },
    { name: "food_and_drink", label: "Food & Drink", handleChecked: handleChecked },
  ];

  function handleChecked(e: React.ChangeEvent<HTMLInputElement>) {
    let name = e.target.name;
    //if (e.target.checked && categories.indexOf(name) === -1) {
    if (e.target.checked) {
      setCategories([...categories, name]);
    }
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
            <FormControlLabel value="easy" control={<Radio />} onChange={() => setDifficulty("easy")} label="Easy" />
            <FormControlLabel value="medium" control={<Radio />} onChange={() => setDifficulty("medium")} label="Medium" />
            <FormControlLabel value="hard" control={<Radio />} onChange={() => setDifficulty("hard")} label="Hard" />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="input-field">
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Select Categories</FormLabel>
          <FormGroup>
            {checkboxes.map((checkbox: MainFormCheckbox) => {
              const { name, label, handleChecked } = checkbox;
              return (
                <FormControlLabel
                  key={name}
                  control={
                    <Checkbox
                      onChange={(e) => {
                        {
                          handleChecked(e);
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
        <Button
          onClick={() => {
            setName("");
          }}
        >
          Reset
        </Button>
        <Button onClick={() => handleSubmit(name, difficulty, categories)}>Submit</Button>
      </ButtonGroup>
    </form>
  );
};

export default MainForm;
