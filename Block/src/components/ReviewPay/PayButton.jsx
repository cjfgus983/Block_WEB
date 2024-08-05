import React from "react";
import styled from "styled-components";

const Button = styled.img`
  width: 168px;
  height: 60px;
  cursor: pointer;
`;
const PayButton = () => {
  return <Button src="/img/pay_finish.svg"></Button>;
};

export default PayButton;
