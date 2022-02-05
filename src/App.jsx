import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import Keiji from "./components/Keiji";

const App = () => {
  const com = {
    color: "green",
    border: "3px solid #999",
    textShadow: "2px 2px 2px #999"
  };
  return (
    <>
      <ColorfulMessage color="red">吹越俊明</ColorfulMessage>

      <p style={{ color: "purple", fontSize: "30px" }}>こんにちは</p>

      <p style={com}>これはコンポーネント内で読み込んでいます</p>
      <Keiji textShadow="2px 2px 2px #987">吹越敬治です</Keiji>
    </>
  );
};

export default App;
