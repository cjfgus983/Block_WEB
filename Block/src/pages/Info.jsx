import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

const Info = () => {
  const { contestId } = useParams();
  const [data, setData] = useState(null);
  const [openModal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Access token is not available.");
        return;
      }

      try {
        const response = await fetch(
          `http://13.209.114.87:8080/contest/${contestId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const json = await response.json();
        if (!response.ok) {
          throw new Error(json.message || "Failed to fetch contest details");
        }

        console.log("Fetched Data: ", json.result); // 데이터를 콘솔에 출력
        setData(json.result); // API 응답으로부터 데이터를 상태에 저장
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [contestId]);

  if (!data) {
    return <div>Loading...</div>; // 데이터가 아직 없다면 로딩 표시
  }

  const closeModal = () => {
    setModal(false); // 모달을 닫는 함수
  };

  return (
    <Page>
      <Container>
        <Top>
          {/* <Logo logo={data.contestImage} /> 이미지 URL 표시 */}
          <Title>{data.contestName}</Title> {/* 공모전 이름 표시 */}
        </Top>
        <Middle>
          <Poster poster={data.contestImage} /> {/* 포스터 이미지 표시 */}
          <Right>
            <Tags>
              {data.hashTag &&
                data.hashTag
                  .split(",")
                  .map((v, index) => <Tag key={index} subject={v.trim()} />)}
            </Tags>
            <Date>
              <Calendar />
              {data.startDate} ~ {data.endDate} {/* 시작일과 마감일 표시 */}
            </Date>
          </Right>
        </Middle>
        <Bottom1>
          <HomeButton url={data.hostUrl} />
          <MatchButton />
        </Bottom1>
        <Bottom2>
          <Button
            onClick={() => {
              setModal(true);
            }}
          >
            <SaveButton />
          </Button>
          <Button
            onClick={() => {
              navigate(`/infoReview/${data.contestId}`, {
                state: { review: data.review },
              });
            }}
          >
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
  padding-left: 350px;
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
