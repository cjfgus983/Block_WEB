import React from "react";
import { useState } from "react";
import styled from "styled-components";

const PlanButton = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (color) {
      setColor(false);
    } else {
      setColor(true);
    }
  };
  return (
    <Button
      src={color ? "/img/plan_click.svg" : "/img/plan_btn.svg"}
      onClick={changeColor}
    />
  );
};

const Button = styled.img`
  margin: 12px;
  width: 148px;
  height: 64px;
`;

export default PlanButton;
