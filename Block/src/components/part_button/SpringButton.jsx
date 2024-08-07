import React from "react";
import { useState } from "react";
import styled from "styled-components";

const SpringButton = () => {
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
      src={color ? "/img/spring_click.svg" : "/img/spring_btn.svg"}
      onClick={changeColor}
    />
  );
};

const Button = styled.img`
  margin: 12px;
  width: 176px;
  height: 64px;
`;

export default SpringButton;
