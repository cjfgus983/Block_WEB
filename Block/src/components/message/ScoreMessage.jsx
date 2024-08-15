import React from "react";
import { useState } from "react";
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
  height: 538px;
  border: 3px solid #989898;
  border-radius: 8px;
`;
const Mark = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 32px;
  margin-bottom: 28px;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 272px;
  height: 42px;
  margin: 8px;
  margin-bottom: 20px;
  font-size: 36px;
  font-family: "Pretendard-Medium";
`;
const Sub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 388px;
  height: 32px;
  margin: 4px;
  margin-bottom: 16px;
  font-family: "Pretendard-Medium";
  font-size: 24px;
`;
const Stars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 204px;
  height: 40px;
  margin-bottom: 24px;
`;
const Star = styled.img`
  width: 36px;
  height: 36px;
  margin: 2px;
`;
const Message = styled.img`
  width: 144px;
  height: 24px;
  visibility: hidden;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`;
const Button = styled.img`
  width: 160px;
  height: 80px;
  cursor: pointer;
`;
const ScoreMessage = (props) => {
  const [saveHover, setSave] = useState(false);
  const [closeHover, setClose] = useState(false);
  const [saveStatus, setStatus] = useState(false);
  const [rate, setRate] = useState(0);

  const closeModal = () => {
    props.close(false);
  };
  return (
    <Page>
      <Container>
        <Mark src="/img/star_mark.svg" />
        <Main>별점 주기</Main>
        <Sub>유저 이름</Sub>
        <Stars>
          <Star
            onClick={() => {
              if (rate == 0) {
                setRate(1);
              } else {
                setRate(0);
              }
            }}
            src={1 <= rate ? "/img/fullstar.svg" : "/img/emptystar.svg"}
          />
          <Star
            onClick={() => setRate(2)}
            src={2 <= rate ? "/img/fullstar.svg" : "/img/emptystar.svg"}
          />
          <Star
            onClick={() => setRate(3)}
            src={3 <= rate ? "/img/fullstar.svg" : "/img/emptystar.svg"}
          />
          <Star
            onClick={() => setRate(4)}
            src={4 <= rate ? "/img/fullstar.svg" : "/img/emptystar.svg"}
          />
          <Star
            onClick={() => setRate(5)}
            src={5 == rate ? "/img/fullstar.svg" : "/img/emptystar.svg"}
          />
        </Stars>
        <Message
          src="/img/save_message.svg"
          style={{ visibility: saveStatus ? "visible" : "hidden" }}
        />
        <Buttons>
          <Button
            src={
              saveHover ? "/img/rate_save_hover.svg" : " img/rate_save_btn.svg"
            }
            onMouseOver={() => setSave(true)}
            onMouseOut={() => setSave(false)}
            onClick={() => setStatus(true)}
          />
          <Button
            src={closeHover ? "/img/close_hover.svg" : "/img/close_btn.svg"}
            onMouseOver={() => setClose(true)}
            onMouseOut={() => setClose(false)}
            onClick={closeModal}
          />
        </Buttons>
      </Container>
    </Page>
  );
};

export default ScoreMessage;
