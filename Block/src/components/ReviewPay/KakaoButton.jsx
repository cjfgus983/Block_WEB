import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.img`
  width: 360px;
  height: 64px;
  margin-right: 40px;
  margin-left: 40px;
`;
const KakaoButton = () => {
  const [hover, setHover] = useState(false);
  return (
    <Link to="/reviewDetail">
      <Button
        src={hover ? "/img/kakao_hover.svg" : "/img/kakao_btn.svg"}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      ></Button>
    </Link>
  );
};

export default KakaoButton;
