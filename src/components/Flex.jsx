import React from "react";

export const Flex = (props) => {
  console.log(props);
  const { border } = props;

  const borders = {
    border
  };

  return (
    <>
      <p style={borders}>フレックスの練習</p>
      <p style={borders}>フレックスの練習２</p>
    </>
  );
};
