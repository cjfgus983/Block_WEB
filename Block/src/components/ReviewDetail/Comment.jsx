import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 718px;
  height: 296px;
  border: 1px solid #1d5ad4;
  border-radius: 20px;
  margin: 10px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  width: 694px;
  height: 80px;
  font-size: 24px;
  color: #1d5ad4;
  padding-left: 24px;
  border-bottom: 1px solid #1d5ad4;
  font-family: "Pretendard-Medium";
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 670px;
  height: 216px;
  line-height: 24px;
  font-size: 20px;
  padding: 24px;
  line-height: 42px;
  font-family: "Pretendard-Regular";
`;

const Comment = ({ content }) => {
  return (
    <Container>
      <Top>후기</Top>
      <Bottom>{content || "후기 내용이 없습니다."}</Bottom>
    </Container>
  );
};

export default Comment;
