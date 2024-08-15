import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 임포트합니다.
import styled from "styled-components";
import "../assets/font/pretendard.css";
import option_savedCompetition from "../assets/img/option_savedCompetition.png";
import optionClicked_savedCompetition from "../assets/img/optionClicked_savedCompetition.png";
import option_savedReview from "../assets/img/option_savedReview.png";
import optionClicked_savedReview from "../assets/img/optionClicked_savedReview.png";

const SavedContest = () => {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수를 생성합니다.

  // 첫 번째 ClickBox의 클릭 이벤트 핸들러를 정의합니다.
  const handlesavedCompetition = () => {
    navigate('/infoSave'); // 원하는 경로로 이동합니다.
  };
  const handlesavedReview = () => {
    navigate('/reviewDetail'); // 원하는 경로로 이동합니다.
  };

  return (
    <Container>
        <ClickBox 
          imgSrc={option_savedCompetition} 
          hoverImgSrc={optionClicked_savedCompetition} 
          onClick={handlesavedCompetition} 
        />

        <ClickBox 
          imgSrc={option_savedReview} 
          hoverImgSrc={optionClicked_savedReview} 
          onClick={handlesavedReview} 
        />
    </Container>
  );
};

const ClickBox = styled.button`
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  font-family: Pretendard-Regular;
  font-size: 28px;
  border-radius: 21px;
  width: 320px;
  height: 320px;
  margin: 50px;
  border: none;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-image: url(${(props) => props.hoverImgSrc});
    transition: all 0.5s; 
  }
`;

const Container = styled.div`
  background-color: #5382DF;
  font-family: Pretendard-Regular;
  font-size: 28px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SavedContest;
