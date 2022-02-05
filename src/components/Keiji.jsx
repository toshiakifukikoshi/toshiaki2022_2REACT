import React from "react";

const Keiji = (props) => {
  const { textShadow, children } = props;

  const Colors = {
    textShadow
  };

  return (
    <>
      <h1 style={Colors}>{children}</h1>
    </>
  );
};

export default Keiji;
