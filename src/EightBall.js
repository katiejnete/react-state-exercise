import React, {useState} from "react";
import './EightBall.css';

const EightBall = ({ answers }) => {
  const [ballColor, setBallColor] = useState("black");
  const [ballMsg, setBallMsg] = useState("Think of a Question");
  const ranIdx = () => Math.floor(Math.random() * answers.length);
  const getAnswer = () => {
    const { msg, color } = answers[ranIdx()];
    setBallColor(color);
    setBallMsg(msg);
  };
  return (
    <>
      <div className="eight-ball" style={{'--ball-color': ballColor}}>{ballMsg}</div>
      <button onClick={getAnswer}>Shake 8 ball</button>
    </>
  );
};

export default EightBall;