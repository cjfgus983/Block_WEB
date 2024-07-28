import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.img`
  width: 400px;
  height: 120px;
  margin-right: 40px;
  margin-left: 40px;
`;
const TossButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <Link to="/reviewDetail">
      <Button
        src={hover ? "/img/toss_hover.svg" : "/img/toss_btn.svg"}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      ></Button>
    </Link>
  );
};

export default TossButton;
