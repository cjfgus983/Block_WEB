import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import styled from "styled-components";
import Rate from "../components/InfoReview/Rate";
import WriteButton from "../components/InfoReview/WriteButton";
import PayMessage from "../components/message/PayMessage";
import Dummy from "../dummy/Dummy";

const InfoReview = () => {
  const navigate = useNavigate();
  const url = document.location.href.split("/").reverse()[0];
  const dummy = Dummy;
  const length = dummy.length;
  let data;
  for (let i = 0; i < length; ++i) {
    if (url == dummy[i].code) {
      data = dummy[i];
    }
  }
  const write = () => {
    navigate(`/reviewWrite/${url}`);
  };
  const [openModal, setModal] = useState(false);
  const ModalStyle = {
    overlay: {
      zIndex: 1000,
    },
    content: {
      width: "400px",
      height: "780px",
      border: 0,
      margin: "0 auto",
      marginTop: "50px",
    },
  };
  return (
    <Page>
      <Title>
        공모전 후기
        <Button onClick={write}>
          <WriteButton />
        </Button>
      </Title>
      <Sub>해당 공모전의 후기를 확인할 수 있습니다.</Sub>
      <List>
        {data.review.map((v, index) => (
          <Container onClick={() => setModal(true)} key={index}>
            <Rate review={v} />
          </Container>
        ))}
      </List>
      <ReactModal isOpen={openModal} style={ModalStyle} ariaHideApp={false}>
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
  align-items: center;
  justify-content: right;
  width: 1080px;
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
const Button = styled.div`
  width: 160px;
  height: 60px;
  margin-left: 270px;
`;
