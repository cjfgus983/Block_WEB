// MyPoint.jsx
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../assets/font/pretendard.css";
import money from "../assets/img/money.png";

const MyPoint = ({ userInfo }) => {
    const [points, setPoints] = useState(0); // 초기 값을 0으로 설정

    useEffect(() => {
        const fetchPoints = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch('http://13.209.114.87:8080/mypage/point', {
                    method: 'GET',
                    headers: {
                        'accept': '*/*',
                        'Authorization': `Bearer ${token}` 
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                if (data.result && data.result.point !== undefined) {
                    setPoints(data.result.point); // API 응답에서 현재 포인트를 설정
                    console.log(data.result.point); // 포인트 값 로그
                } else {
                    console.error('result or point is undefined', data);
                }
            } catch (error) {
                console.error('Error fetching points:', error);
            }
        };

        fetchPoints();
    }, []);

    return (
        <Container>
            <PointContainer>
                <PointSummary>
                    <div>
                        <img style={{paddingRight: '30px'}} src={money} alt="money icon" />
                    </div>
                    <div className="point-div">
                        <p><span className="bold">{userInfo.name}</span><span> 님의 현재 포인트</span></p>
                        <p className="bold">{points.toLocaleString()} P</p>
                    </div>
                </PointSummary>
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

export default MyPoint;
