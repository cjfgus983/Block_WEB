import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactModal from "react-modal";
import styled from "styled-components";
import Profile from "../components/ReviewDetail/Profile";
import Rate from "../components/ReviewDetail/Rate";
import Comment from "../components/ReviewDetail/Comment";
import Service from "../components/ReviewDetail/Service";
import ScoreMessage from "../components/message/ScoreMessage";

const ReviewDetail = () => {
  const { contestId, reviewId } = useParams(); // URL에서 contestId와 reviewId를 추출
  const [reviewData, setReviewData] = useState(null);
  const [openModal, setModal] = useState(false);

  useEffect(() => {
    console.log("contestId:", contestId);
    console.log("reviewId:", reviewId);

    const fetchReviewDetail = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Access token is not available.");
        return;
      }

      if (!contestId || !reviewId) {
        console.error("Contest ID or Review ID is not available.");
        return;
      }

      try {
        const response = await fetch(
          `http://13.209.114.87:8080/contest/${contestId}/reviews/${reviewId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json(); // 서버로부터의 오류 응답 내용을 확인
          console.error("Error response from server:", errorData);
          throw new Error("Failed to fetch review detail");
        }

        const data = await response.json();
        setReviewData(data.result); // 서버에서 받은 리뷰 데이터를 상태에 저장
      } catch (error) {
        console.error("Error fetching review detail:", error);
      }
    };

    fetchReviewDetail();
  }, [contestId, reviewId]);

  if (!reviewData) {
    return <div>Loading...</div>; // 데이터가 아직 없다면 로딩 표시
  }

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
          <Profile writer={reviewData.userName} />
        </Left>
        <Right>
          <Top>
            <Rate score={reviewData.score} />
            <Evaluate onClick={() => setModal(true)}>별점 주기</Evaluate>
          </Top>
          {/* <Service service={reviewData.service} prize={reviewData.prize} /> */}
          <Comment content={reviewData.content} />
        </Right>
      </Container>
      <ReactModal isOpen={openModal} style={ModalStyle} ariaHideApp={false}>
        <ScoreMessage close={setModal} />
      </ReactModal>
    </Page>
  );
};

export default ReviewDetail;

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
