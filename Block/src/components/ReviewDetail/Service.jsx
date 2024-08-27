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

const Service = ({ service, prize }) => {
  return (
    <Container>
      <Top>제출한 서비스</Top>
      <Bottom>
        {service || "서비스 정보가 없습니다."}
        {prize && (
          <>
            <br />
            <br />
            <strong>수상 내역:</strong> {prize}
          </>
        )}
      </Bottom>
    </Container>
  );
};

export default Service;
