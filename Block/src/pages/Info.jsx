import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import styled from "styled-components";
import Logo from "../components/Info/Logo";
import Poster from "../components/Info/Poster";
import Tag from "../components/Info/Tag";
import Calendar from "../components/Info/Calendar";
import HomeButton from "../components/Info/HomeButton";
import MatchButton from "../components/Info/MatchButton";
import SaveButton from "../components/Info/SaveButton";
import ReviewButton from "../components/Info/ReviewButton";
import SaveMessage from "../components/message/SaveMessage";
import Dummy from "../dummy/Dummy";
import Save from "../dummy/Save";

const Info = () => {
  //메인에서 공모전 클릭 시 개별 url로 이동하고, useLocation으로 주소 얻은 후 api연결
  const dummy = Dummy;
  const length = dummy.length;
  const url = document.location.href.split("/").reverse()[0];
  let data;
  for (let i = 0; i < length; ++i) {
    if (url == dummy[i].code) {
      data = dummy[i];
    }
  }
  const navigate = useNavigate();
  const review = () => {
    console.log(data.code);
    navigate(`/infoReview/${data.code}`, {
      state: {
        review: data.review,
      },
    });
  };
  const [openModal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  };
  const ModalStyle = {
    overlay: {
      zIndex: 1000,
    },
    content: {
      width: "480px",
      height: "400px",
      border: 0,
      margin: "0 auto",
      marginTop: "160px",
    },
  };
  return (
    <Page>
      <Container>
        <Top>
          <Logo logo={data.logo} />
          <Title>{data.title}</Title>
        </Top>
        <Middle>
          <Poster poster={data.poster} />
          <Right>
            <Tags>
              {data.tag.map((v, index) => (
                <Tag key={index} subject={v} />
              ))}
            </Tags>
            <Date>
              <Calendar />
              {data.date}
            </Date>
          </Right>
        </Middle>
        <Bottom1>
          <HomeButton />
          <MatchButton />
        </Bottom1>
        <Bottom2>
          <Button
            onClick={() => {
              setModal(true);
              Save.push(data);
              console.log(Save);
            }}
          >
            <SaveButton />
          </Button>
          <Button onClick={review}>
            <ReviewButton />
          </Button>
        </Bottom2>
      </Container>
      <ReactModal isOpen={openModal} style={ModalStyle} ariaHideApp={false}>
        <SaveMessage close={closeModal} />
      </ReactModal>
    </Page>
  );
};

export default Info;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 190px;
  width: 100vw;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1080px;
  margin-top: 100px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  padding-left: 60px;
  font-size: 30px;
  font-family: "Pretendard-SemiBold";
`;
const Middle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;
const Tags = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  padding: 16px;
`;
const Date = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 600px;
  margin-left: 20px;
  height: 56px;
  font-size: 24px;
  font-family: "Pretendard-Regular";
`;
const Bottom1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 880px;
  margin: 0 auto;
  margin-bottom: 20px;
`;
const Bottom2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 880px;
  margin-left: 80px;
`;
const Button = styled.div`
  width: 460px;
  height: 92px;
  cursor: pointer;
`;
