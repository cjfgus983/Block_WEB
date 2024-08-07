import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Button = styled.img`
  width: 460px;
  height: 92px;
  cursor: pointer;
`;
const ReviewButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <Button
      src={hover ? "/img/review_hover.svg" : "/img/review_btn.svg"}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    ></Button>
  );
};

export default ReviewButton;
