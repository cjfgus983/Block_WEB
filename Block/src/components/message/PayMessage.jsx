import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255, 0.3);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 800px;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 272px;
  height: 42px;
  margin: 8px;
  margin-top: 48px;
  font-size: 36px;
  font-family: "Pretendard-SemiBold";
`;
const Sub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 388px;
  height: 32px;
  margin: 4px;
  margin-top: 48px;
  margin-bottom: 128px;
  font-family: "Pretendard-Regular";
  font-size: 20px;
`;
const Button = styled.img`
  width: 320px;
  height: 320px;
`;
const PayMessage = (props) => {
  const [detailHover, setDetail] = useState(false);
  const closeModal = () => {
    props.close(false);
    console.log("close");
  };
  return (
    <Page>
      <Container>
        <Main>결제 완료</Main>
        <Sub>결제하셔야 자세한 후기를 볼 수 있습니다.</Sub>
        <Link to="/reviewDetail">
          <Button
            src={detailHover ? "/img/detail_hover.svg" : "/img/detail_btn.svg"}
            onMouseOver={() => setDetail(true)}
            onMouseOut={() => setDetail(false)}
            onClick={closeModal}
          />
        </Link>
      </Container>
    </Page>
  );
};

export default PayMessage;
