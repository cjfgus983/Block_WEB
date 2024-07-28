import React from "react";
import styled from "styled-components";

const Star = styled.img`
  width: 36px;
  height: 36px;
  margin: 2px;
`;
const EmptyStar = () => {
  return <Star src="/img/emptystar.svg" />;
};

export default EmptyStar;
