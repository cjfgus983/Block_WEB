import React from "react";
import { useState } from "react";
import styled from "styled-components";

const WebButton = () => {
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
      src={color ? "/img/web_click.svg" : "/img/web_btn.svg"}
      onClick={changeColor}
    />
  );
};

const Button = styled.img`
  margin: 12px;
  width: 160px;
  height: 64px;
`;

export default WebButton;
