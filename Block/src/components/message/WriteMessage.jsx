import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255, 0.3);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 400px;
  border: 3px solid #989898;
  border-radius: 8px;
`;
const Mark = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 48px;
  margin-bottom: 36px;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 272px;
  height: 42px;
  margin: 8px;
  margin-bottom: 72px;
  font-size: 36px;
  font-family: "Pretendard-Medium";
`;
const Button = styled.img`
  width: 160px;
  height: 80px;
  cursor: pointer;
`;
const WriteMessage = () => {
  const [homeHover, setHome] = useState(false);
  const navigate = useNavigate();
  const url = document.location.href.split("/").reverse()[0];
  const reviewHome = () => {
    navigate(`/infoReview/${url}`);
  };
  return (
    <Page>
      <Container>
        <Mark src="/img/check_mark.svg" />
        <Main>작성 완료</Main>
        <Button
          src={
            homeHover
              ? "/img/review_home_hover.svg"
              : "/img/review_home_btn.svg"
          }
          onMouseOver={() => setHome(true)}
          onMouseOut={() => setHome(false)}
          onClick={reviewHome}
        />
      </Container>
    </Page>
  );
};

export default WriteMessage;
