import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.img`
  width: 460px;
  height: 92px;
  cursor: pointer;
`;
const HomeButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <Link to="/">
      <Button
        src={hover ? "/img/homepage_hover.svg" : "/img/homepage_btn.svg"}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      ></Button>
    </Link>
  );
};

export default HomeButton;
