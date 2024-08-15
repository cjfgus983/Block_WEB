import React from "react";
import styled from "styled-components";

const Logos = styled.img`
  width: 192px;
  height: 80px;
  margin: 20px;
`;
const Logo = (props) => {
  return <Logos src={props.logo} alt="logo" />;
};

export default Logo;
