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
const ApplyMessage = (props) => {
  const [moveHover, setMove] = useState(false);
  const [laterHover, setLater] = useState(false);
  const closeModal = () => {
    props.close(false);
  };
  return (
    <Page>
      <Container>
        <Mark src="/img/check_mark.svg" />
        <Main>지원 완료</Main>
        <Buttons>
          <Link to="/teamMatch">
            <Button
              src={
                moveHover
                  ? "/img/match_home_hover.svg"
                  : " img/match_home_btn.svg"
              }
              onMouseOver={() => setMove(true)}
              onMouseOut={() => setMove(false)}
            />
          </Link>
          <Link to="/showApply">
            <Button
              src={
                laterHover ? "/img/applier_hover.svg" : "/img/applier_btn.svg"
              }
              onMouseOver={() => setLater(true)}
              onMouseOut={() => setLater(false)}
              onClick={closeModal}
            />
          </Link>
        </Buttons>
      </Container>
    </Page>
  );
};

export default ApplyMessage;
