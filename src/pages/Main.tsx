import { useState } from "react";
import { Options } from "../props/Options.types";
import mainLogo from "../main_logo.jpeg";
import MainForm from "../components/MainForm";

export const Main = () => {
  const [options, setOptions] = useState<Options>();

  return (
    <div className="form-container">
      <img src={mainLogo} alt="main logo" />
      <MainForm handleSubmit={handleSubmit} />
    </div>
  );

  function handleSubmit(name: string, difficulty: string, categories: string[]) {
    setOptions({ name: name, difficulty: difficulty, categories: categories });
  }
};

export default Main;
