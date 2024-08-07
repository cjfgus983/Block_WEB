import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.img`
  width: 460px;
  height: 92px;
  cursor: pointer;
`;
const SaveButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <Button
      src={hover ? "/img/save_hover.svg" : "/img/save_btn.svg"}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    ></Button>
  );
};

export default SaveButton;
