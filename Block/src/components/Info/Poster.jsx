import React from "react";
import styled from "styled-components";

const Posters = styled.img`
  width: 280px;
  height: 168px;
  border-radius: 10px;
  margin: 20px;
`;
const Poster = (props) => {
  return <Posters src={props.poster} alt="poster" />;
};

export default Poster;
