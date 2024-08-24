import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.img`
  width: 460px;
  height: 92px;
  cursor: pointer;
`;
const MatchButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <Link to="/teamMatch">
      <Button
        src={hover ? "/img/match_hover.svg" : "/img/match_btn.svg"}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      ></Button>
    </Link>
  );
};

export default MatchButton;
