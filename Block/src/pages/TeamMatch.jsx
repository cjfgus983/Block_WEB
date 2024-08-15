import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TeamMatch = () => {
  const [applyHover, setApply] = useState(false);
  const [showHover, setShow] = useState(false);
  return (
    <Page>
      <Main>팀 매칭</Main>
      <Sub>공모전에 당신과 함께할 팀원을 찾아보세요!</Sub>
      <Buttons>
        <Link to="/matchApply">
          <Button
            src={
              applyHover
                ? "/img/match_apply_hover.svg"
                : " img/match_apply_btn.svg"
            }
            onMouseOver={() => setApply(true)}
            onMouseOut={() => setApply(false)}
          />
        </Link>
        <Link to="/showApply">
          <Button
            src={
              showHover
                ? "/img/show_apply_hover.svg"
                : "/img/show_apply_btn.svg"
            }
            onMouseOver={() => setShow(true)}
            onMouseOut={() => setShow(false)}
          />
        </Link>
      </Buttons>
    </Page>
  );
};

export default TeamMatch;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 190px;
  width: 100vw;
  height: 100vh;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 272px;
  height: 42px;
  margin: 8px;
  margin-bottom: 48px;
  font-size: 40px;
  font-family: "Pretendard-SemiBold";
`;
const Sub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 32px;
  margin: 4px;
  margin-bottom: 20px;
  font-family: "Pretendard-Regular";
  font-size: 24px;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`;
const Button = styled.img`
  width: 320px;
  height: 320px;
  margin: 28px;
  cursor: pointer;
`;
