import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState(""); // 초기값
  const onClickEnter = () => setMessage("안녕하세요!!!");
  const onClickLeave = () => setMessage("안녕히가세요!!!");
  const [val, setColor] = useState("black");

  return (
    <>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      {/* <button onClick={onClickEnter()}>입장</button> 가로를 안넣는 이유는 넣으면 바로 호출되기 때문 */}
      <h1 style={{ color: val }}>{message}</h1>
      {/* <button style={{ color: "red" }} onClick={() => setColor("red")}> 익명의 함수이기 때문에 ()가 있어서 함수가 바로 불러 지지 않는다? */}
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </>
  );
};
export default Say;
