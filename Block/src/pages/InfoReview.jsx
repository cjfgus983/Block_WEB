import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactModal from "react-modal";
import styled from "styled-components";
import Rate from "../components/InfoReview/Rate";
import WriteButton from "../components/InfoReview/WriteButton";
import PayMessage from "../components/message/PayMessage";

const InfoReview = () => {
  const { contestId } = useParams(); // URL에서 contestId 추출
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]); // 초기값을 빈 배열로 설정
  const [openModal, setModal] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("Access token is not available.");
        return;
      }

      if (!contestId) {
        console.error("Contest ID is not available.");
        return;
      }

      try {
        const response = await fetch(
          `http://13.209.114.87:8080/contest/${contestId}/review`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();
        const reviewsArray = data.result?.reviewList || []; // reviewList를 배열로 설정
        setReviews(reviewsArray);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, [contestId]);

  const write = () => {
    navigate(`/reviewWrite/${contestId}`, { state: { contestId } }); // contestId를 state로 전달
  };

  const viewDetail = (reviewId) => {
    navigate(`/reviewDetail/${contestId}/reviews/${reviewId}`); // reviewDetail로 이동
  };

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

  // 조건부 렌더링: 리뷰가 없는 경우 메시지 표시
  if (!Array.isArray(reviews) || reviews.length === 0) {
    return (
      <Page>
        <Title>
          공모전 후기
          <Button onClick={write}>
            <WriteButton />
          </Button>
        </Title>
        <Sub>후기가 없습니다. 첫 후기를 작성해 보세요!</Sub>
      </Page>
    );
  }

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
        {reviews.map((review) => (
          <Container
            onClick={() => viewDetail(review.reviewId)}
            key={review.reviewId}
          >
            <Rate review={review} />
          </Container>
        ))}
      </List>
      <ReactModal isOpen={openModal} style={ModalStyle} ariaHideApp={false}>
        <PayMessage close={() => setModal(false)} />
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
  cursor: pointer; /* 추가: 클릭 가능한 커서 스타일 */
`;

const Button = styled.div`
  width: 160px;
  height: 60px;
  margin-left: 270px;
`;
