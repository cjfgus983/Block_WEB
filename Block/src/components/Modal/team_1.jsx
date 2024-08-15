import React,{useState} from 'react';
import Team12 from './team_1_2';
import {Modal, Box,Text,Text2,Button} from './team';

const Team_1 = ({ onClose }) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태를 관리합니다.

    const handleCardClick = () => {
        setIsModalOpen(true); // Card 클릭 시 모달을 엽니다.
    };

    const closeModal = () => {
        setIsModalOpen(false); // 모달을 닫는 함수입니다.
    };

    return (
        <>
        <Modal>
            <Box>
                <Text>총 n명</Text>
                <Text2 onClick={handleCardClick}>팀원 (00대학교)</Text2>
                <Text2 onClick={handleCardClick}>팀원 (00대학교)</Text2>
                <Text2 onClick={handleCardClick}>팀원 (00대학교)</Text2>
                <Text2 onClick={handleCardClick}>팀원 (00대학교)</Text2>
                <Text2 onClick={handleCardClick}>팀원 (00대학교)</Text2>
                <Button onClick={onClose}>닫기</Button>

            </Box>
        </Modal>  
        {isModalOpen && <Team12 onClose={closeModal} />}  
        </>
    );
};


export default Team_1;