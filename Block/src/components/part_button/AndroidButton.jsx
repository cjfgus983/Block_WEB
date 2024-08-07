import React from "react";
import { useState } from "react";
import styled from "styled-components";

const AndroidButton = () => {
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
      src={color ? "/img/android_click.svg" : "/img/android_btn.svg"}
      onClick={changeColor}
    />
  );
};

const Button = styled.img`
  margin: 12px;
  width: 200px;
  height: 64px;
`;

export default AndroidButton;
