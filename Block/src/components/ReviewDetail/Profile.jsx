import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 376px;
  margin: 16px;
`;
const Profiles = styled.img`
  width: 280px;
  height: 280px;
  border: 1px solid #5382df;
  border-radius: 20px;
`;
const TextRate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 216px;
  height: 96px;
  font-size: 32px;
  color: #1d5ad4;
  padding: 32px;
  font-family: "Pretendard-SemiBold";
`;

const Profile = () => {
  return (
    <Container>
      <Profiles alt="profile" />
      <TextRate>최고의 공모전</TextRate>
    </Container>
  );
};

export default Profile;
