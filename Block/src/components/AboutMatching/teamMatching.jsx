import React, { useState } from "react";
import styled from "styled-components";
import Team1 from "../Modal/team_1"; // 모달 컴포넌트 import

// 팀 매칭 컴포넌트
const TeamMatching = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태를 관리합니다.

    const handleCardClick = () => {
        setIsModalOpen(true); // Card 클릭 시 모달을 엽니다.
    };

    const closeModal = () => {
        setIsModalOpen(false); // 모달을 닫는 함수입니다.
    };

    return (
    <>
        <Card onClick={handleCardClick}>
            <h3>Team Matching Content</h3>
        </Card>

        {isModalOpen && <Team1 onClose={closeModal} />} {/* 모달을 조건부로 렌더링 */}
    </>
    );
};

const Card = styled.div`
    width: 240px;
    height: 240px;
    background-color: #5382df;
    border-radius: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer; /* Card를 클릭할 수 있음을 나타냅니다. */
`;

export default TeamMatching;
