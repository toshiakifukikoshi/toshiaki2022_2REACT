import React from "react";
import "./style.css";
import { ButtonTest } from "./components/ButtonTest";
import { InputTodos } from "./components/InputTodos";

export const App = () => {
  return (
    <>
      <ButtonTest />
      <InputTodos />
      {/* <button onClick={getButton}>押してください</button>
      
      <input value={todotext} placeholder="TODO" onChange={aaa}/>
      <button onClikc={action}>送信</button> */}
    </>
  );
};
