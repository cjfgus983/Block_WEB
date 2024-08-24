import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const Applier = (props) => {
  const [part, setPart] = useState("");
  useEffect(() => {
    if (props.apply.part == "plan") {
      setPart("/img/plan_btn.svg");
    } else if (props.apply.part == "design") {
      setPart("/img/design_btn.svg");
    } else if (props.apply.part == "web") {
      setPart("/img/web_btn.svg");
    } else if (props.apply.part == "android") {
      setPart("/img/android_btn.svg");
    } else if (props.apply.part == "ios") {
      setPart("/img/ios_btn.svg");
    } else if (props.apply.part == "spring") {
      setPart("/img/spring_btn.svg");
    } else if (props.apply.part == "node") {
      setPart("/img/node_btn.svg");
    }
  }, [props]);
  return (
    <Container>
      <Profile src={props.apply.profile} alt="profile" />
      <User>{props.apply.name}</User>
      <School>{props.apply.school}</School>
      <Part src={part} />
    </Container>
  );
};
export default Applier;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 488px;
  margin: 20px;
  margin-bottom: 48px;
`;
const Profile = styled.img`
  width: 280px;
  height: 280px;
  border: 1px solid black;
`;
const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 40px;
  margin: 8px;
  font-size: 32px;
  font-family: "Pretendard-Medium";
`;
const School = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 36px;
  font-size: 26px;
  font-family: "Pretendard-Regular";
  color: #5382df;
`;
const Part = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 64px;
  margin: 8px;
`;
