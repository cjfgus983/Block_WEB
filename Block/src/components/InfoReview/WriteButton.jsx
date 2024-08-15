import React from "react";
import styled from "styled-components";

const WriteButton = () => {
  return <Button>후기 작성</Button>;
};
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 60px;
  border-radius: 20px;
  background-color: #1d5ad4;
  color: #ffffff;
  font-size: 26px;
  font-family: "Pretendard-Medium";
  cursor: pointer;
`;

export default WriteButton;
