import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import Rate from "../components/InfoReview/Rate";
import PayMessage from "../components/message/PayMessage";

const InfoReview = () => {
  const location = useLocation();
  const [openModal, setModal] = useState(false);
  const ModalStyle = {
    overlay: {
      zIndex: 1000,
    },
    content: {
      width: "480px",
      height: "400px",
      border: 0,
      margin: "0 auto",
      marginTop: "260px",
    },
  };
  return (
    <Page>
      <Title>공모전 후기</Title>
      <Sub>해당 공모전의 후기를 확인할 수 있습니다.</Sub>
      <List>
        {location.state.review.map((v) => (
          <Container onClick={() => setModal(true)}>
            <Rate review={v} />
          </Container>
        ))}
      </List>
      <ReactModal isOpen={openModal} style={ModalStyle}>
        <PayMessage close={setModal} />
      </ReactModal>
    </Page>
  );
};

export default InfoReview;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 190px;
  width: 100vw;
  height: 100vh;
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
const Sub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 512px;
  height: 80px;
  margin: 20px;
  font-size: 26px;
  font-family: "Pretendard-Regular";
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1080px;
  margin: 20px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 400px;
  margin: 40px;
`;
