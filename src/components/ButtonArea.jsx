import React from "react";

export const ButtonArea = (props) => {
  console.log(props);
  const { color } = props;

  const changeColors = {
    color
  };

  const countUpBtn = () => {
    alert("確認です");
  };

  return (
    <>
      <button style={changeColors} onClick={countUpBtn}>
        ボタン
      </button>
    </>
  );
};
