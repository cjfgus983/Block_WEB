import React from "react";
import styled from "styled-components";
import Applier from "../components/Applier";

const ShowApply = () => {
  const data = [
    {
      profile: "",
      name: "지원자 A",
      school: "가톨릭대학교",
      part: "plan",
    },
    {
      profile: "",
      name: "지원자 B",
      school: "숭실대학교",
      part: "web",
    },
    {
      profile: "",
      name: "지원자 C",
      school: "인하대학교",
      part: "spring",
    },
  ];

  return (
    <Page>
      <Main>지원자 보기</Main>
      <Sub>당신과 맞을 것 같은 팀원을 우선적으로 보여드립니다.</Sub>
      <List>
        {data.map((v, index) => (
          <Applier key={index} apply={v} />
        ))}
      </List>
    </Page>
  );
};

export default ShowApply;

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
  margin: 4px;
  margin-bottom: 48px;
  font-size: 40px;
  font-family: "Pretendard-SemiBold";
`;

const Sub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 24px;
  margin: 4px;
  margin-bottom: 20px;
  font-family: "Pretendard-Regular";
  font-size: 24px;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1080px;
  margin-top: 48px;
`;
