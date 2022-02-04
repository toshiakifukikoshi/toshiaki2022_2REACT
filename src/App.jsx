import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const toshiaki = {
    color: "blue",
    fontSize: "30px"
  };

  const onClickButton = () => {
    alert("押されました");
  };
  return (
    <>
      <h1 style={toshiaki}>吹越俊明</h1>

      <ColorfulMessage color="blue">
        新しい書き方で青く書きました
      </ColorfulMessage>
      <ColorfulMessage color="red">
        次の赤も新しい書き方でかきました
      </ColorfulMessage>
      <ColorfulMessage color="pink">
        最後にピンクでかわいくかきました
      </ColorfulMessage>
      <ColorfulMessage color="yellow" fontSize="20px">
        黄色で書いてます
      </ColorfulMessage>

      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
