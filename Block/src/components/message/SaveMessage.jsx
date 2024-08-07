import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  margin-top: 32px;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 272px;
  height: 42px;
  margin: 8px;
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
  font-family: "Pretendard-Medium";
  font-size: 24px;
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
const SaveMessage = (props) => {
  const [moveHover, setMove] = useState(false);
  const [laterHover, setLater] = useState(false);
  const closeModal = () => {
    props.close(false);
  };
  return (
    <Page>
      <Container>
        <Mark src="/img/save_mark.svg" />
        <Main>저장되었습니다.</Main>
        <Sub>내 공모전 페이지에서 확인하세요!</Sub>
        <Buttons>
          <Link to="/infoSave">
            <Button
              src={moveHover ? "/img/move_hover.svg" : "/img/move_btn.svg"}
              onMouseOver={() => setMove(true)}
              onMouseOut={() => setMove(false)}
            />
          </Link>
          <Button
            src={laterHover ? "/img/later_hover.svg" : "/img/later_btn.svg"}
            onMouseOver={() => setLater(true)}
            onMouseOut={() => setLater(false)}
            onClick={closeModal}
          />
        </Buttons>
      </Container>
    </Page>
  );
};

export default SaveMessage;
