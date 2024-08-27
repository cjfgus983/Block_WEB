import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactModal from "react-modal";
import styled from "styled-components";
import Profile2 from "../components/ReviewWrite/Profile2";
import PlanButton from "../components/part_button/PlanButton";
import DesignButton from "../components/part_button/DesignButton";
import WebButton from "../components/part_button/WebButton";
import IosButton from "../components/part_button/IosButton";
import AndroidButton from "../components/part_button/AndroidButton";
import SpringButton from "../components/part_button/SpringButton";
import NodeButton from "../components/part_button/NodeButton";
import WriteFinish from "../components/ReviewWrite/WriteFinish";
import WriteMessage from "../components/message/WriteMessage";

const ReviewWrite = () => {
  const { contestId } = useParams(); // useParams로 contestId 추출
  const [name, setName] = useState("");
  const [prize, setPrize] = useState("");
  const [school, setSchool] = useState("");
  const [grade, setGrade] = useState("");
  const [content, setContent] = useState("");
  const [service, setService] = useState(""); // 예시로 추가한 상태
  const [openModal, setModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Access token is not available.");
      return;
    }

    if (!contestId) {
      console.error("Contest ID is not available.");
      return;
    }

    console.log("Contest ID:", contestId); // contestId를 확인하기 위한 로그
    console.log(
      "Request URL:",
      `http://13.209.114.87:8080/contest/${contestId}/review/regist`
    ); // 요청 URL 확인

    const reviewData = {
      content,
      service,
      prize,
    };

    try {
      const response = await fetch(
        `http://13.209.114.87:8080/contest/${contestId}/review/regist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(reviewData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register review");
      }

      const result = await response.json();
      console.log("Review registered successfully:", result);
      setModal(true); // 성공 시 모달 표시
    } catch (error) {
      console.error("Error registering review:", error);
    }
  };

  return (
    <Page>
      <Title>공모전 후기 작성</Title>
      <Sub>해당 공모전의 후기를 작성해보세요.</Sub>
      <form onSubmit={handleSubmit}>
        <Top>
          기본 정보
          <Inform>
            <Profile2 />
            <Right>
              <Bar>
                <Article>
                  이름
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Article>
                <Article>
                  수상
                  <Input
                    value={prize}
                    onChange={(e) => setPrize(e.target.value)}
                  />
                </Article>
              </Bar>
              <Bar>
                <Article>
                  학교
                  <Input
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  />
                </Article>
                <Article>
                  학년
                  <Input
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </Article>
              </Bar>
            </Right>
          </Inform>
        </Top>
        <Middle>
          지원 파트
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
        </Middle>
        <Bottom>
          후기
          <Write
            placeholder="후기 작성 (최대 2,000자 이내)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button type="submit">
            <WriteFinish />
          </Button>
        </Bottom>
      </form>
      <ReactModal isOpen={openModal} style={ModalStyle} ariaHideApp={false}>
        <WriteMessage />
      </ReactModal>
    </Page>
  );
};

// ModalStyle 정의
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

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1080px;
  height: 320px;
  font-size: 32px;
  font-family: "Pretendard-Semibold";
`;

const Inform = styled.div`
  display: flex;
  flex-direction: row;
  width: 1080px;
  height: 280px;
  margin-top: 20px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 760px;
`;

const Bar = styled.div`
  display: flex;
  flex-direction: row;
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 140px;
  font-size: 24px;
  font-family: "Pretendard-Medium";
  color: #1d5ad4;
`;

const Input = styled.input`
  width: 260px;
  height: 44px;
  margin-top: 4px;
  border: 1px solid #989898;
  font-size: 32px;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1080px;
  height: 200px;
  margin-top: 60px;
  font-size: 32px;
  font-family: "Pretendard-Semibold";
`;

const PartBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 1080px;
  justify-content: center;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1080px;
  height: 440px;
  margin-top: 60px;
  font-size: 32px;
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

const Button = styled.button`
  width: 184px;
  height: 60px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export default ReviewWrite;
