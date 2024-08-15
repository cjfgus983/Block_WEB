import React, {useState} from "react";
import styled from "styled-components";
import Team3 from "../Modal/team_3";

const GaveHeart = () => {
    
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
            <h3>Gave Heart Content</h3>
        </Card>
        {isModalOpen && <Team3 onClose={closeModal} />}
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
    `;

export default GaveHeart;

