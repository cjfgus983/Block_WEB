import React from "react";
import styled from "styled-components";
import KakaoButton from "../components/ReviewPay/KakaoButton";
import NaverButton from "../components/ReviewPay/NaverButton";
import TossButton from "../components/ReviewPay/TossButton";
import PointButton from "../components/ReviewPay/PointButton";

const ReviewPay = () => {
  return (
    <Page>
      <Title>결제</Title>
      <Top>
        <KakaoButton />
        <NaverButton />
      </Top>
      <Bottom>
        <TossButton />
        <PointButton />
      </Bottom>
    </Page>
  );
};

export default ReviewPay;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 190px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 438px;
  height: 80px;
  margin: 20px;
  font-size: 48px;
  font-family: "Pretendard-SemiBold";
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  width: 960px;
  height: 120px;
  margin-top: 80px;
  margin-bottom: 80px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  width: 960px;
  height: 120px;
  margin-bottom: 80px;
`;
