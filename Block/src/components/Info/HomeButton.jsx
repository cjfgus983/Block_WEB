import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.img`
  width: 460px;
  height: 92px;
  cursor: pointer;
`;

const HomeButton = ({ url }) => {
  const [hover, setHover] = useState(false);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Button
        src={hover ? "/img/homepage_hover.svg" : "/img/homepage_btn.svg"}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        alt="Home"
      />
    </a>
  );
};

export default HomeButton;
