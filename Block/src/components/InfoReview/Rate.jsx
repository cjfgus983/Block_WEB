import React from "react";
import styled from "styled-components";
import FullStar from "../star/FullStar";
import HalfStar from "../star/HalfStar";
import EmptyStar from "../star/EmptyStar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 440px;
`;
const Profile = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  border: 1px solid #5382df;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 30px;
  padding: 5px;
  font-size: 24px;
  font-family: "Pretendart-Regular";
`;
const TextRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 40px;
  padding: 10px;
  font-size: 28px;
  font-family: "Pretendard-SemiBold";
`;
const StarRate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 40px;
  padding: 2px;
`;
const Rate = (props) => {
  const integer = Math.floor(props.review.rate);
  const rest = props.review.rate - integer;
  const Star = () => {
    if (rest == 0) {
      if (integer == 5) {
        return (
          <StarRate>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
          </StarRate>
        );
      } else if (integer == 4) {
        return (
          <StarRate>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <EmptyStar />
          </StarRate>
        );
      } else if (integer == 3) {
        return (
          <StarRate>
            <FullStar />
            <FullStar />
            <FullStar />
            <EmptyStar />
            <EmptyStar />
          </StarRate>
        );
      } else if (integer == 2) {
        return (
          <StarRate>
            <FullStar />
            <FullStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
          </StarRate>
        );
      } else if (integer == 1) {
        return (
          <StarRate>
            <FullStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
          </StarRate>
        );
      } else {
        return (
          <StarRate>
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
          </StarRate>
        );
      }
    } else {
      if (integer == 4) {
        return (
          <StarRate>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </StarRate>
        );
      } else if (integer == 3) {
        return (
          <StarRate>
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
            <EmptyStar />
          </StarRate>
        );
      } else if (integer == 2) {
        return (
          <StarRate>
            <FullStar />
            <FullStar />
            <HalfStar />
            <EmptyStar />
            <EmptyStar />
          </StarRate>
        );
      } else if (integer == 1) {
        return (
          <StarRate>
            <FullStar />
            <HalfStar />
            <EmptyStar />
            <EmptyStar />
            <EmptyStar />
          </StarRate>
        );
      }
    }
  };
  return (
    <Container>
      <Profile src="" alt="profile" />
      <User>{props.review.user}</User>
      <TextRate>{props.review.headline}</TextRate>
      <Star />
    </Container>
  );
};

export default Rate;
