import React from "react";
import styled from "styled-components";
import Card from "../components/InfoSave/Card";
import Save from "../dummy/Save";

const InfoSave = () => {
  const save = Save;
  console.log(save);
  return (
    <Page>
      <Title>내 공모전과 대외 활동</Title>
      <Sub>저장한 공모전과 대외 활동을 확인할 수 있습니다.</Sub>
      <List>
        {save.map((v, index) => (
          <Card key={index} competition={v} />
        ))}
      </List>
    </Page>
  );
};

export default InfoSave;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 190px;
  width: 100vw;
  height: 100vh;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 80px;
  margin: 20px;
  font-size: 48px;
  font-family: "Pretendard-SemiBold";
`;
const Sub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 562px;
  height: 80px;
  margin: 20px;
  font-size: 24px;
  font-family: "Pretendard-Regular";
`;
const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 1080px;
  margin: 20px;
`;
