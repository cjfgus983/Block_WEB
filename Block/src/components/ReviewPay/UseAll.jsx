import React from "react";
import styled from "styled-components";

const Button = styled.img`
  width: 140px;
  height: 48px;
  margin-right: 40px;
  margin-left: 40px;
  cursor: pointer;
`;
const UseAll = () => {
  return <Button src="/img/use_btn.svg"></Button>;
};

export default UseAll;
