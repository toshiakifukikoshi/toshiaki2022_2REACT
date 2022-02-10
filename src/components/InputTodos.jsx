import React, { useState } from "react";

export const InputTodos = () => {
  const [todos, setTodos] = useState("");

  const onChangTodoText = (e) => {
    setTodos(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={todos}
        placeholder="ここに入れてください"
        onChange={onChangTodoText}
      />
    </>
  );
};
