import React from "react";
import styled from "styled-components";

const Tags = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 52px;
  border-radius: 24px;
  margin-left: 20px;
  margin-right: 20px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 26px;
  font-family: "Pretendard-Regular";
  background-color: #d9d9d9;
`;
const Tag = (props) => {
  return <Tags># {props.subject}</Tags>;
};

export default Tag;
