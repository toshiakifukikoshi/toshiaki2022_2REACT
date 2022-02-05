import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";
import Keiji from "./components/Keiji";

const App = () => {
  const [num, setNum] = useState(0);
  const [aaa, setAaa] = useState("男性");
  const [face, setFace] = useState(false);

  const AddNum = () => {
    setNum(num + 1);
  };

  const changeGender = () => {
    setAaa("女性");
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        face || setFace(true);
      } else {
        face && setFace(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  const com = {
    color: "green",
    border: "3px solid #999",
    textShadow: "2px 2px 2px #999"
  };
  return (
    <>
      <button onClick={AddNum}>countUp</button>
      <p>{num}</p>

      {face && <p>😂</p>}
      {aaa && <p>{aaa}</p>}
      <button onClick={changeGender}>変化するボタンです</button>

      <ColorfulMessage color="red">吹越俊明</ColorfulMessage>

      <p style={{ color: "purple", fontSize: "30px" }}>こんにちは</p>

      <p style={com}>これはコンポーネント内で読み込んでいます</p>
      <Keiji textShadow="2px 2px 2px #987">吹越敬治です</Keiji>
    </>
  );
};

export default App;
