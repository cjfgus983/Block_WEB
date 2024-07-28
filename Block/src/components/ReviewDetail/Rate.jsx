import React from "react";
import styled from "styled-components";
import FullStar from "../star/FullStar";
import HalfStar from "../star/HalfStar";
import EmptyStar from "../star/EmptyStar";

const Rates = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 360px;
  height: 60px;
  border: 1px solid #1d5ad4;
  border-radius: 20px;
  color: #1d5ad4;
  font-size: 20px;
  margin: 16px;
  font-family: "Pretendard-Medium";
`;
const Rate = () => {
  return (
    <Rates>
      별점
      <FullStar />
      <FullStar />
      <FullStar />
      <FullStar />
      <FullStar />
    </Rates>
  );
};

export default Rate;
