import React from "react";
import styled from "styled-components";

const Star = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  margin: 2px;
`;
const Empty = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  z-index: 0;
`;
const Half = styled.img`
  position: absolute;
  width: 18px;
  height: 36px;
  z-index: 1;
`;
const HalfStar = () => {
  return (
    <Star>
      <Half src="/img/halfstar.svg" />
      <Empty src="/img/emptystar.svg" />
    </Star>
  );
};

export default HalfStar;
