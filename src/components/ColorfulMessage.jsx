import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "20px"
  };

  return (
    <>
      <ul>
        <li style={contentStyle}>{children}</li>
        <li style={contentStyle}>{children}</li>
        <li style={contentStyle}>{children}</li>
      </ul>
    </>
  );
};

export default ColorfulMessage;
