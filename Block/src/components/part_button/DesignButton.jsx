import React from "react";
import { useState } from "react";
import styled from "styled-components";

const DesignButton = () => {
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
      src={color ? "/img/design_click.svg" : "/img/design_btn.svg"}
      onClick={changeColor}
    />
  );
};

const Button = styled.img`
  margin: 12px;
  width: 168px;
  height: 64px;
`;

export default DesignButton;
