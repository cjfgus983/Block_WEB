import React from "react";
import styled from "styled-components";

const calculateDday = (deadline) => {
  const today = new Date();
  const endDate = new Date(deadline);
  const diffTime = endDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? `D-${diffDays}` : "D-Day";
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  height: 380px;
  margin: 40px;
  cursor: pointer;
`;

const Poster = styled.img`
  width: 180px;
  height: 200px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border: 1px solid black;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid #1d5ad4;
  padding: 10px;
  font-size: 20px;
  background-color: #1d5ad4;
  color: #ffffff;
  font-family: "Pretendard-Bold";
`;

const Agency = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  height: 40px;
  font-size: 18px;
  font-family: "Pretendard-Regular";
  color: #5382df;
  overflow: hidden; /* 컨텐츠가 넘칠 경우 숨김 처리 */
  white-space: nowrap; /* 텍스트를 한 줄로 표시 */
  text-overflow: ellipsis; /* 텍스트가 넘칠 경우 말줄임표로 표시 */
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 180px;
  height: 100px;
  font-size: 20px;
  font-family: "Pretendard-SemiBold";
`;

const Card = ({
  title,
  description,
  imageUrl,
  organization,
  deadline,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <Poster src={imageUrl} alt={title} />
      <Day>{calculateDday(deadline)}</Day>
      <Agency>{organization}</Agency>
      <Title>{title}</Title>
    </Container>
  );
};

export default Card;
