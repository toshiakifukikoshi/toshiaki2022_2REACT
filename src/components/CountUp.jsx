import React, { useEffect, useState } from "react";

export const CountUp = (props) => {
  console.log(props);
  const { color, fontWeight } = props;

  const [num, setNum] = useState(0);
  const [face, setface] = useState(false);

  const numbers = {
    color,
    fontWeight
  };
  const up = () => {
    setNum(num + 1);
  };
  const down = () => {
    setNum(num - 1);
  };
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        face || setface(true);
      } else {
        face && setface(false);
      }
    }
  }, [num]);

  const showBtn = () => {
    setface(!face);
  };

  return (
    <>
      <p style={numbers}>{num}</p>
      <button onClick={up}>カウントアップボタン</button>
      <button onClick={down}>カウントダウンボタン</button>
      {face && <p>( ◠‿◠ )</p>}
      <br />

      <button onClick={showBtn}>表示非表示ボタン</button>
    </>
  );
};
