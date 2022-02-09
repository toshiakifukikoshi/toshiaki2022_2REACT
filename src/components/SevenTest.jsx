import React from "react";

export const SevenTest = (props) => {
  const { color, children } = props;
  const changeColor = {
    color
  };

  return (
    <>
      <p style={changeColor}>{children}</p>
    </>
  );
};
