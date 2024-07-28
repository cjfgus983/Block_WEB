import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 320px;
  margin: 40px;
`;
const Poster = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  border: 1px solid black;
`;
const Day = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 40px;
  padding: 10px;
  font-size: 20px;
`;

const Card = () => {
  return (
    <Container>
      <Poster src="" alt="poster" />
      <Day>D - 365</Day>
    </Container>
  );
};

export default Card;
