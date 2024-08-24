import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import Profile from "../components/ReviewDetail/Profile";
import Rate from "../components/ReviewDetail/Rate";
import Comment from "../components/ReviewDetail/Comment";
import Service from "../components/ReviewDetail/Service";
import ScoreMessage from "../components/message/ScoreMessage";
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
  font-size: 48px;
  margin-top: 40px;
  margin-bottom: 8px;
  font-family: "Pretendard-SemiBold";
`;
const Sub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 512px;
  height: 80px;
  font-size: 20px;
  font-family: "Pretendard-Medium";
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1048px;
  margin: 20px;
`;
const Left = styled.div``;
const Right = styled.div``;
const Top = styled.div`
  display: flex;
  flex-direction: row;
`;
const Evaluate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 60px;
  margin: 16px;
  border-radius: 20px;
  background-color: #1d5ad4;
  color: #ffffff;
  font-size: 26px;
  font-family: "Pretendard-Medium";
`;
const ReviewDetail = () => {
  const [openModal, setModal] = useState(false);
  const ModalStyle = {
    overlay: {
      zIndex: 1000,
    },
    content: {
      width: "400px",
      height: "580px",
      border: 0,
      margin: "0 auto",
      marginTop: "50px",
    },
  };
  return (
    <Page>
      <Title>공모전 자세한 후기</Title>
      <Sub>해당 공모전의 자세한 후기를 만나보세요!</Sub>
      <Container>
        <Left>
          <Profile />
        </Left>
        <Right>
          <Top>
            <Rate />
            <Evaluate onClick={() => setModal(true)}>별점 주기</Evaluate>
          </Top>
          <Service />
          <Comment />
        </Right>
      </Container>
      <Container>
        <Left>
          <Profile />
        </Left>
        <Right>
          <Top>
            <Rate />
            <Evaluate onClick={() => setModal(true)}>별점 주기</Evaluate>
          </Top>
          <Service />
          <Comment />
        </Right>
      </Container>
      <ReactModal isOpen={openModal} style={ModalStyle} ariaHideApp={false}>
        <ScoreMessage close={setModal} />
      </ReactModal>
    </Page>
  );
};

export default ReviewDetail;
