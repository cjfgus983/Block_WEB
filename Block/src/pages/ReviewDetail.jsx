import React from "react";
import styled from "styled-components";
import Profile from "../components/ReviewDetail/Profile";
import Rate from "../components/ReviewDetail/Rate";
import Comment from "../components/ReviewDetail/Comment";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 190px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 438px;
  height: 80px;
  font-size: 48px;
  margin-top: 40px;
  margin-bottom: 8px;
  font-family: "Pretendard-SemiBold";
`;
const Sub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 512px;
  height: 80px;
  font-size: 20px;
  font-family: "Pretendard-Medium";
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1048px;
  margin: 20px;
`;
const Left = styled.div``;
const Right = styled.div``;

const ReviewDetail = () => {
  return (
    <Page>
      <Title>공모전 자세한 후기</Title>
      <Sub>해당 공모전의 자세한 후기를 만나보세요!</Sub>
      <Container>
        <Left>
          <Profile />
        </Left>
        <Right>
          <Rate />
          <Comment />
        </Right>
      </Container>
      <Container>
        <Left>
          <Profile />
        </Left>
        <Right>
          <Rate />
          <Comment />
        </Right>
      </Container>
    </Page>
  );
};

export default ReviewDetail;
