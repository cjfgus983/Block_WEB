import React from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import PlanButton from "../components/part_button/PlanButton";
import DesignButton from "../components/part_button/DesignButton";
import WebButton from "../components/part_button/WebButton";
import IosButton from "../components/part_button/IosButton";
import AndroidButton from "../components/part_button/AndroidButton";
import SpringButton from "../components/part_button/SpringButton";
import NodeButton from "../components/part_button/NodeButton";
import ApplyMessage from "../components/message/ApplyMessage";
const MatchApply = () => {
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
      marginTop: "160px",
    },
  };
  return (
    <Page>
      <Part>지원 파트</Part>
      <PartBar>
        <PlanButton />
        <DesignButton />
        <WebButton />
        <IosButton />
      </PartBar>
      <PartBar>
        <AndroidButton />
        <SpringButton />
        <NodeButton />
      </PartBar>
      <Choice>내 프로필 선택</Choice>
      <Profiles>
        <Profile src="" alt="profile" />
        <Profile src="" alt="profile" />
        <Add src="/img/add_profile.svg" />
      </Profiles>
      <Introduce>자기 소개</Introduce>
      <Write placeholder="자기 소개 작성 (최대 1,000자 이내)" />
      <ApplyButton onClick={() => setModal(true)}>지원완료</ApplyButton>
      <ReactModal isOpen={openModal} style={ModalStyle} ariaHideApp={false}>
        <ApplyMessage close={setModal} />
      </ReactModal>
    </Page>
  );
};

export default MatchApply;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 190px;
  width: 100vw;
`;
const Part = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1080px;
  height: 60px;
  margin-bottom: 48px;
  font-size: 40px;

  font-family: "Pretendard-Semibold";
`;
const PartBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 1080px;
  justify-content: center;
`;
const Choice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1080px;
  height: 60px;
  margin-top: 60px;
  margin-bottom: 48px;
  font-size: 40px;
  font-family: "Pretendard-Semibold";
`;
const Profiles = styled.div`
  display: flex;
  flex-direction: row;
  height: 240px;
  justify-content: center;
  align-items: center;
`;
const Profile = styled.img`
  width: 240px;
  height: 240px;
  margin-left: 16px;
  margin-right: 16px;
  border: 1px solid black;
`;
const Add = styled.img`
  width: 80px;
  height: 80px;
  margin: 16px;
  cursor: pointer;
`;
const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1080px;
  height: 40px;
  margin-top: 60px;
  margin-bottom: 48px;
  font-size: 40px;
  font-family: "Pretendard-SemiBold";
`;
const Write = styled.textarea`
  width: 1000px;
  height: 340px;
  margin-top: 20px;
  margin-bottom: 80px;
  padding: 20px;
  font-size: 28px;
  font-family: "Pretendard-Regular";
  outline: none;
  resize: none;
  border: 1px solid #1d5ad4;
  border-radius: 20px;
`;
const ApplyButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 184px;
  height: 60px;
  border-radius: 20px;
  font-size: 26px;
  font-family: "Pretendard-SemiBold";
  background-color: #1d5ad4;
  color: #ffffff;
  cursor: pointer;
`;
