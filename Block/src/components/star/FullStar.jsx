import React from "react";
import styled from "styled-components";

const Star = styled.img`
  width: 36px;
  height: 36px;
  margin: 2px;
`;
const FullStar = () => {
  return <Star src="/img/fullstar.svg" />;
};

export default FullStar;
