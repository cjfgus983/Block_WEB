import React from "react";
import { useState } from "react";
import styled from "styled-components";

const IosButton = () => {
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
      src={color ? "/img/ios_click.svg" : "/img/ios_btn.svg"}
      onClick={changeColor}
    />
  );
};

const Button = styled.img`
  margin: 12px;
  width: 160px;
  height: 64px;
`;

export default IosButton;
