import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "../assets/font/pretendard.css";
import option_teamMatching from "../assets/img/option_teamMatching.png";
import optionClicked_teamMatching from "../assets/img/optionClicked_teamMatching.png";
import option_heartToYou from "../assets/img/option_heartToYou.png";
import optionClicked_heartToYou from "../assets/img/optionClicked_heartToYou.png";
import option_gaveHeart from "../assets/img/option_gaveHeart.png";
import optionClicked_gaveHeart from "../assets/img/optionClicked_gaveHeart.png";
import TeamMatching from "./AboutMatching/teamMatching";
import HeartToYou from "./AboutMatching/heartToYou";
import GaveHeart from "./AboutMatching/gaveHeart";

const AboutMatching = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const teamMatchingRef = useRef(null);
  const heartToYouRef = useRef(null); 
  const gaveHeartRef = useRef(null);

  const handleClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  useEffect(() => {
    const adjustScroll = (ref) => {
      if (ref.current) {
        const offsetTop = ref.current.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    };

    if (clickedButton === "teamMatching") {
      adjustScroll(teamMatchingRef);
    } else if (clickedButton === "heartToYou") {
      adjustScroll(heartToYouRef);
    } else if (clickedButton === "gaveHeart") {
      adjustScroll(gaveHeartRef);
    }
  }, [clickedButton]);

  return (
    <Container>
      <ChoiceContainer>
        <ClickBox
          imgSrc={option_teamMatching}
          hoverImgSrc={optionClicked_teamMatching}
          isClicked={clickedButton === "teamMatching"}
          onClick={() => handleClick("teamMatching")}
        />

        <ClickBox
          imgSrc={option_heartToYou}
          hoverImgSrc={optionClicked_heartToYou}
          isClicked={clickedButton === "heartToYou"}
          onClick={() => handleClick("heartToYou")}
        />
        <ClickBox
          imgSrc={option_gaveHeart}
          hoverImgSrc={optionClicked_gaveHeart}
          isClicked={clickedButton === "gaveHeart"}
          onClick={() => handleClick("gaveHeart")}
        />
      </ChoiceContainer>

      <ContentContainer>
        {clickedButton === "teamMatching" && (
          <BoxContent ref={teamMatchingRef}>
            <TeamMatching />
          </BoxContent>
        )}
        {clickedButton === "heartToYou" && (
          <BoxContent ref={heartToYouRef}>
            <HeartToYou />
          </BoxContent>
        )}
        {clickedButton === "gaveHeart" && (
          <BoxContent ref={gaveHeartRef}>
            <GaveHeart />
          </BoxContent>
        )}
      </ContentContainer>
    </Container>
  );
};

const ChoiceContainer = styled.div`
  background-color: #5382df;
  font-family: Pretendard-Regular;
  font-size: 28px;
  width: 1200px;
  padding: 0% 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  background-color: #5382df;
  font-family: Pretendard-Regular;
  font-size: 28px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
`;

const BoxContent = styled.div`
  display: flex;
  justify-content: center;
  width: 1200px;
  height: auto;
  background-color: white;
  align-items: center;
  padding: 100px 0px;
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
  margin-top: 60px;
  border: none;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-image: url(${(props) => props.hoverImgSrc});
    transition: all 0.5s;
  }
`;

const Container = styled.div`
  background-color: #5382df;
  font-family: Pretendard-Regular;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default AboutMatching;
