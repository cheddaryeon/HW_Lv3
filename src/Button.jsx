import React from "react";
import { LargeBtn } from "./components/Styled";

function Button() {
  const LPBtnHandler = () => {
    alert("버튼을 만들어 보세요");
  };

  return (
    <div>
      <h1>Button</h1>
      <div className="PrimaryBtn">
        <LargeBtn backcolor="yellow" onClick={LPBtnHandler}>
          Large Primary Button
        </LargeBtn>
      </div>
      <div className="NegativeBtn"></div>
    </div>
  );
}

export default Button;
