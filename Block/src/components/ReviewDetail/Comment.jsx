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

const Comment = () => {
  return (
    <Container>
      <Top>후기</Top>
      <Bottom>
        영상과 관련된 공모전이라서 바로 도전했습니다. 영상 찍고 영상 편집하는
        것을 좋아하는 분들이거나 미디어 관련으로 관심 있는 분들이라면 무조건
        도전하는 것을 추천합니다!!!! 그리고 처음으로 공모전 나가시는 분들도
        도전해보시면 좋을 것 같습니다!
      </Bottom>
    </Container>
  );
};

export default Comment;
