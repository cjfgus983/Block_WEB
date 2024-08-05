import React from "react";
import styled from "styled-components";

const Use = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 360px;
  height: 64px;
  margin-right: 40px;
  margin-left: 40px;
  border: 1px solid #989898;
  border-radius: 10px;
  cursor: pointer;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 220px;
  height: 24px;
  margin: 16px;
  margin-left: 60px;
  text-align: right;
  font-size: 24px;
  font-family: "Pretendard-Medium";
  cursor: pointer;
`;
const Point = styled.img`
  width: 20px;
  height: 36px;
`;
const PointUse = () => {
  return (
    <Use>
      <Input></Input>
      <Point src="/img/point.svg"></Point>
    </Use>
  );
};

export default PointUse;
