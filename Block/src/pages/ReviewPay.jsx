import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import KakaoButton from "../components/ReviewPay/KakaoButton";
import PointUse from "../components/ReviewPay/PointUse";
import PayButton from "../components/ReviewPay/PayButton";
import UseAll from "../components/ReviewPay/UseAll";
import PayMessage from "../components/message/PayMessage";
const ReviewPay = () => {
  const [openModal, setModal] = useState(false);
  const ModalStyle = {
    overlay: {
      zIndex: 1000,
    },
    content: {
      width: "480px",
      height: "800px",
      border: 0,
      margin: "0 auto",
    },
  };
  return (
    <Page>
      <Title>결제</Title>
      <Container>
        <Left>
          <Top>포인트 사용</Top>
          <PointUse />
          <Bottom>
            <Status>현재 포인트 : 1,650P</Status>
            <UseAll />
          </Bottom>
        </Left>
        <Right>
          <Top>결제 수단</Top>
          <KakaoButton />
        </Right>
      </Container>
      <Button onClick={() => setModal(true)}>
        <PayButton />
      </Button>
      <ReactModal isOpen={openModal} style={ModalStyle}>
        <PayMessage close={setModal} />
      </ReactModal>
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
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1000px;
  height: 328px;
  margin: 16px;
  border: 1px solid #989898;
  border-radius: 20px;
`;
const Left = styled.div`
  margin: 16px;
  margin-top: 56px;
`;
const Right = styled.div`
  margin: 16px;
  margin-top: 56px;
`;
const Top = styled.div`
  font-size: 30px;
  font-family: "Pretendard-Medium";
  margin-bottom: 32px;
  padding-left: 40px;
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;
const Status = styled.div`
  width: px;
  padding-left: 40px;
  font-size: 20px;
  font-family: "Pretendard-Regular";
`;
const Button = styled.div`
  width: 168px;
  height: 60px;
  margin-top: 60px;
  margin-right: 40px;
  margin-left: 40px;
`;
