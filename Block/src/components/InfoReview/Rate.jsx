import React from "react";
import styled from "styled-components";

const Rate = ({ review }) => {
  console.log("Review data:", review);
  // 리뷰의 점수를 기반으로 별을 채우거나 비우는 로직을 추가합니다.
  const renderStars = (score) => {
    const fullStars = Math.floor(score); // 채워진 별의 수
    const emptyStars = 5 - fullStars; // 빈 별의 수

    return (
      <StarRate>
        {[...Array(fullStars)].map((_, index) => (
          <FullStar key={index} />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <EmptyStar key={index} />
        ))}
      </StarRate>
    );
  };

  return (
    <RateContainer>
      <UserName>{review.userName}</UserName>
      <Message>{review.message}</Message>
      {renderStars(review.score)}
    </RateContainer>
  );
};

export default Rate;

const RateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const UserName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Message = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  color: #555;
  max-width: 200px;
  white-space: nowrap; /* 텍스트가 한 줄로 표시되도록 */
  overflow: hidden; /* 넘치는 텍스트를 숨깁니다 */
  text-overflow: ellipsis; /* 넘치는 텍스트를 '...'로 표시합니다 */
`;

const StarRate = styled.div`
  display: flex;
  flex-direction: row;
`;

const FullStar = styled.div`
  width: 20px;
  height: 20px;
  background-color: gold; /* 별의 색상 */
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  ); /* 별 모양을 나타내는 클립 경로 */
  margin-right: 5px;
`;

const EmptyStar = styled(FullStar)`
  background-color: #ccc; /* 빈 별의 색상 */
`;
