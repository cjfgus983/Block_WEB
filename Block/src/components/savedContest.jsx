import React from "react";
import styled from "styled-components";
import "../assets/font/pretendard.css";
import option_savedCompetition from "../assets/img/option_savedCompetition.png";
import optionClicked_savedCompetition from "../assets/img/optionClicked_savedCompetition.png";
import option_savedReview from "../assets/img/option_savedReview.png";
import optionClicked_savedReview from "../assets/img/optionClicked_savedReview.png";


const SavedContest = () => {
  return (
    <Container>
      <ClickBoxContainer>
        <ClickBox 
          imgSrc={option_savedCompetition} 
          hoverImgSrc={optionClicked_savedCompetition} 
        />
        <ClickBox 
          imgSrc={option_savedReview} 
          hoverImgSrc={optionClicked_savedReview} 
        />
      </ClickBoxContainer>
    </Container>
  );
};

const ClickBoxContainer = styled.div `
  width: 750px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
const ClickBox = styled.button`
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  font-family: Pretendard-Regular;
  font-size: 28px;
  border-radius: 21px;
  width: 320px;
  height: 320px;
  padding-top: 30px;
  border: none;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-image: url(${(props) => props.hoverImgSrc});
    transition: all 0.5s; 
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 30px;
  }
`;

const Container = styled.div `
    background-color: #5382DF;
    font-family: Pretendard-Regular;
    font-size: 28px;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

`;




export default SavedContest;