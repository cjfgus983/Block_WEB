import React from "react";
import { useState } from "react";
import styled from "styled-components";

const NodeButton = () => {
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
      src={color ? "/img/node_click.svg" : "/img/node_btn.svg"}
      onClick={changeColor}
    />
  );
};

const Button = styled.img`
  margin: 12px;
  width: 152px;
  height: 64px;
`;

export default NodeButton;
