import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "../assets/font/pretendard.css";
import option_teamMatching from "../assets/img/option_teamMatching.png";
import optionClicked_teamMatching from "../assets/img/optionClicked_teamMatching.png";
import option_heartToYou from "../assets/img/option_heartToYou.png";
import optionClicked_heartToYou from "../assets/img/optionClicked_heartToYou.png";
import option_gaveHeart from "../assets/img/option_gaveHeart.png";
import optionClicked_gaveHeart from "../assets/img/optionClicked_gaveHeart.png";
import applyPart_android from "../assets/img/applyPart_android.png";
import applyPart_design from "../assets/img/applyPart_design.png";
import applyPart_ios from "../assets/img/applyPart_ios.png";
import applyPart_node from "../assets/img/applyPart_node.png";
import applyPart_plan from "../assets/img/applyPart_plan.png";
import applyPart_spring from "../assets/img/applyPart_spring.png";
import applyPart_web from "../assets/img/applyPart_web.png";
import likeProfileImg from "../assets/img/likeProfileImg.png";

const AboutMatching = () => {
  const [clickedButton, setClickedButton] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const teamMatchingRef = useRef(null);
  const heartToYouRef = useRef(null);
  const gaveHeartRef = useRef(null);

  const handleClick = (buttonId) => {
    setClickedButton(buttonId);
    if (buttonId === "gaveHeart") {
      fetchApiData();
    }
  };

  const fetchApiData = async () => {
    const token = localStorage.getItem("token");
    setLoading(true); // 로딩 시작
    try {
      const response = await fetch("http://13.209.114.87:8080/mypage/like", {
        method: 'GET',
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('네트워크 응답이 정상적이지 않습니다.');
      }
  
      const data = await response.json();
      setApiData(data.result); // 수정된 부분
    } catch (error) {
      console.error("API 호출 오류:", error);
    } finally {
      setLoading(false); // 로딩 종료
    }
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

    if (clickedButton) {
      const ref = clickedButton === "teamMatching" ? teamMatchingRef
               : clickedButton === "heartToYou" ? heartToYouRef
               : gaveHeartRef;
      adjustScroll(ref);
    }
  }, [clickedButton]);

  const getImageForApplyPart = (applyPart) => {
    switch (applyPart.toLowerCase()) {
      case 'plan':
        return applyPart_plan;
      case 'android':
        return applyPart_android;
      case 'design':
        return applyPart_design;
      case 'ios':
        return applyPart_ios;
      case 'node':
        return applyPart_node;
      case 'spring':
        return applyPart_spring;
      case 'web':
        return applyPart_web;
      default:
        return null;
    }
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
          <BoxContent ref={clickedButton === "teamMatching" ? teamMatchingRef : clickedButton === "heartToYou" ? heartToYouRef : gaveHeartRef}>
            {loading ? (
              <div>Loading...</div>
            ) : clickedButton === "gaveHeart" ? (
              apiData.map((item, index) => (
                <LikeCard key={index}>
                  <img style={{width: '160px', height: '160px'}} src={likeProfileImg} />
                  <div>{item.name}</div>
                  <div style={{paddingTop: '10px'}}>
                    <img style={{width:'50%', paddingLeft:'25%'}} src={getImageForApplyPart(item.applyPart)} alt={item.applyPart} />
                  </div>
                </LikeCard>
              ))
            ) : (
              <>
                <Card imgSrc={getCardImage(clickedButton)}></Card>
                <Card imgSrc={getCardImage(clickedButton)}></Card>
                <Card imgSrc={getCardImage(clickedButton)}></Card>
              </>
            )}


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

const Card = styled.div`
  width: 240px;
  height: 240px;
  background-color: #5382DF;
  border-radius: 21px;
  background-image: url(${(props) => props.imgSrc});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;


const ChoiceContainer = styled.div`
  background-color: #5382DF;
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
  background-color: #5382DF;
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
  flex-wrap: wrap; /* 여러 줄로 감싸기 */
  justify-content: flex-start; /* 왼쪽 정렬 */
  width: 1200px;
  height: auto;
  background-color: white;
  align-items: flex-start; /* 카드 정렬 */
  padding: 30px 50px; /* 패딩 조정 */
  border-radius: 21px;
`;

const LikeCard = styled.div `
  width: calc(25% - 20px); /* 한 줄에 4개를 위해 너비 조정 */
  height: 240px;
  background-color: #5382DF;
  border-radius: 21px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: white;
  margin-right: 10px;
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
  background-color: #5382DF;
  font-family: Pretendard-Regular;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default AboutMatching;
