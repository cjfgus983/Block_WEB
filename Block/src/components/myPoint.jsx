import React from "react";
import styled from "styled-components";
import "../assets/font/pretendard.css";
import money from "../assets/img/money.png";

const MyPoint = () => {
    return (
    <Container>
        <PointContainer>
            <PointSummary>
                <div>
                    <img style={{paddingRight: '30px'}} src={money} />
                </div>
                <div className="point-div">
                    <p><span className="bold">사용자</span><span> 님의 현재 포인트</span></p>
                    <p className="bold">12,000 P</p>
                </div>
            </PointSummary>
            <PointHistory>
                <p style={{fontSize: "40px"}}><span className="bold">사용자</span><span> 님의 포인트 내역</span></p>
                <table className="history-table" style={{width: "100%"}}>
                    <tr>
                        <td className="point-name">공모전 리뷰 이벤트 당첨</td>
                        <td className="add-point">+10,000 P</td>
                    </tr>
                    <tr>
                        <td className="point-name">자세한 리뷰 보기</td>
                        <td className="sub-point">-1,000 P</td>
                    </tr>
                    <tr>
                        <td className="point-name">자세한 리뷰 보기</td>
                        <td className="sub-point">-1,000 P</td>
                    </tr>
                    <tr>
                        <td className="point-name">자세한 리뷰 보기</td>
                        <td className="sub-point">-1,000 P</td>
                    </tr>
                    <tr>
                        <td className="point-name">공모전 리뷰 이벤트 당첨</td>
                        <td className="add-point">+5,000 P</td>
                    </tr>
                </table>
            </PointHistory>
        </PointContainer>
    </Container>
    );
};

const Container = styled.div `
    background-color: #5382DF;
    font-family: Pretendard-Regular;
    font-size: 28px;
    padding-top: 50px;
    padding-bottom: 50px;

    .bold {
        font-family: Pretendard-Bold;
    }
`;
const PointContainer = styled.div `
    width: 80%;
    margin: 0 10%;

`;
const PointSummary = styled.div `
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 20px;

    @media screen and (max-width: 950px) {
        flex-direction: column;
    }
`;
const PointHistory = styled.div `

    display : none;
    background-color: white;
    border-radius: 20px;
    margin-top: 50px;
    padding: 20px 5%;
    padding-bottom: 35px;

    tr {
        height: 50px;
    }
    .add-point {
        color: #ED3939;
        text-align: right;
        font-family: Pretendard-Bold;
    }
    .sub-point {
        color: #1D5AD4;
        text-align: right;
        font-family: Pretendard-Bold;
    }
    
`;

export default MyPoint;