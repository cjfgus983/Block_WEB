import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255, 0.3);
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  height: 400px;
  border: 3px solid #989898;
  border-radius: 8px;
`;
const Mark = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 32px;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 272px;
  height: 42px;
  margin: 8px;
  font-size: 36px;
  font-family: "Pretendard-Medium";
`;
const Sub = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 388px;
  height: 32px;
  margin: 4px;
  font-family: "Pretendard-Medium";
  font-size: 20px;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`;
const Button = styled.img`
  width: 160px;
  height: 80px;
  cursor: pointer;
`;
const PayMessage = (props) => {
  const [payHover, setPay] = useState(false);
  const [closeHover, setClose] = useState(false);
  const closeModal = () => {
    props.close(false);
    console.log("close");
  };
  return (
    <Page>
      <Container>
        <Mark src="/img/pay_mark.svg" />
        <Main>결제 필요</Main>
        <Sub>결제하셔야 자세한 후기를 볼 수 있습니다.</Sub>
        <Buttons>
          <Link to="/reviewPay">
            <Button
              src={payHover ? "/img/pay_hover.svg" : "/img/pay_btn.svg"}
              onMouseOver={() => setPay(true)}
              onMouseOut={() => setPay(false)}
            />
          </Link>
          <Button
            src={closeHover ? "/img/close_hover.svg" : "/img/close_btn.svg"}
            onMouseOver={() => setClose(true)}
            onMouseOut={() => setClose(false)}
            onClick={closeModal}
          />
        </Buttons>
      </Container>
    </Page>
  );
};

export default PayMessage;
