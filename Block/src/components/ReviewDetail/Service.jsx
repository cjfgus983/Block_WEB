import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 718px;
  height: 248px;
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
  height: 168px;
  line-height: 24px;
  font-size: 20px;
  padding: 24px;
  line-height: 42px;
  font-family: "Pretendard-Regular";
`;

const Service = () => {
  return (
    <Container>
      <Top>제출한 서비스</Top>
      <Bottom>
        저희팀의 서비스는 이러한 서비스입니다. 이렇게 저렇게 서비스되고 수익
        창출은 이런식으로 낼 수 있습니다. 저희팀의 강점은 이것이고 이런저런
        경쟁사가 있지만 이러한 차별점을 두었습니다. 그래서 이렇고 저렇고 해서
        이러한 서비스를 제공합니다.
      </Bottom>
    </Container>
  );
};

export default Service;
