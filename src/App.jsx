import React from "react";
import { Flex } from "./components/Flex";
import { ButtonArea } from "./components/ButtonArea";
import { CountUp } from "./components/CountUp";

export const App = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Flex border="1px solid #666"></Flex>
      </div>
      <ButtonArea color="green"></ButtonArea>
      <CountUp color="blue" fontWeight="bold"></CountUp>
    </>
  );
};

// export default App;
