import React, { useState } from "react";

export const ButtonTest = () => {
  const [num, setNum] = useState(1);

  const AddNums = () => {
    setNum(num * 2);
  };

  return (
    <>
      <p>{num}</p>
      <button onClick={AddNums}>数字が増えますよ</button>
    </>
  );
};
