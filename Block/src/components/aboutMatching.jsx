import React, { useState } from "react";
import styled from "styled-components";
import "../assets/font/pretendard.css";
import option_teamMatching from "../assets/img/option_teamMatching.png";
import optionClicked_teamMatching from "../assets/img/optionClicked_teamMatching.png";
import option_heartToYou from "../assets/img/option_heartToYou.png";
import optionClicked_heartToYou from "../assets/img/optionClicked_heartToYou.png";
import option_gaveHeart from "../assets/img/option_gaveHeart.png";
import optionClicked_gaveHeart from "../assets/img/optionClicked_gaveHeart.png";

const AboutMatching = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  return (
    <Container>
      <ChoiceContainer>
        <ClickBox
          imgSrc={option_teamMatching}
          hoverImgSrc={optionClicked_teamMatching}
          isClicked={clickedButton === 'teamMatching'}
          onClick={() => handleClick('teamMatching')}
        />

        <ClickBox
          imgSrc={option_heartToYou}
          hoverImgSrc={optionClicked_heartToYou}
          isClicked={clickedButton === 'heartToYou'}
          onClick={() => handleClick('heartToYou')}
        />
        <ClickBox
          imgSrc={option_gaveHeart}
          hoverImgSrc={optionClicked_gaveHeart}
          isClicked={clickedButton === 'gaveHeart'}
          onClick={() => handleClick('gaveHeart')}
        />
      </ChoiceContainer>

      <ContentContainer>
        {clickedButton && (
          <BoxContent>
            <Dubogi>더보기</Dubogi>
            <CardsWrapper>
              <Card imgSrc={getCardImage(clickedButton)}></Card>
              <Card imgSrc={getCardImage(clickedButton)}></Card>
              <Card imgSrc={getCardImage(clickedButton)}></Card>
            </CardsWrapper>
          </BoxContent>
        )}
      </ContentContainer>
    </Container>
  );
};

const getCardImage = (buttonId) => {
  switch (buttonId) {
    case 'teamMatching':
      return option_teamMatching;
    case 'heartToYou':
      return option_heartToYou;
    case 'gaveHeart':
      return option_gaveHeart;
    default:
      return '';
  }
};

const Dubogi = styled.button`
  background-color: #5382DF;
  font-family: Pretendard-Regular;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  width: auto;
  height: auto;
  padding: 5px 30px;
  margin: 40px; 
  border: none;
  cursor: pointer;
  margin-left: auto;
  margin-right: 5%;
`;

const Card = styled.div`
  width: 240px;
  height: 240px;
  background-color: #5382DF;
  border-radius: 21px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between; 
  gap: 20px; 
  align-items: center;
  width: 90%; 
  padding: 0% 5% 5% 5%; 
  overflow-x: auto; 
`;

const ChoiceContainer = styled.div`
  background-color: #5382DF;
  font-family: Pretendard-Regular;
  font-size: 28px;
  width: 90%; 
  padding: 0% 5% ; 
  display: flex;
  justify-content: space-between; 
  align-items: center;
  gap: 20px; 
`;

const ContentContainer = styled.div`
  background-color: #5382DF;
  font-family: Pretendard-Regular;
  font-size: 28px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxContent = styled.div`
  display: flex;
  flex-direction: column; 
  width: 80%;
  height: 100%;
  background-color: white;
  align-items: center;
  padding: 20px;
  border-radius: 21px;
`;

const ClickBox = styled.button`
  background-image: ${(props) =>
    props.isClicked ? `url(${props.hoverImgSrc})` : `url(${props.imgSrc})`};
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
`;

export default AboutMatching;
