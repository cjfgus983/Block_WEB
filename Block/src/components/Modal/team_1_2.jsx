import React, { useState } from 'react';
import styled from 'styled-components';
import {Modal, Box,Text,Text2,Button} from './team';

const Team_1_2 = ({ onClose }) => {
    const [isSaved, setIsSaved] = useState(false); // 저장 상태를 관리합니다.

    const handleSave = () => {
        setIsSaved(true); // 저장 버튼 클릭 시 저장 상태를 true로 설정합니다.
        
    };

    return (
    <Modal>
        <Box>
            <Text>별점주기</Text>
            <Text2>팀원의 별점을 매겨주세요.</Text2>
            <Text2>팀원 (00대학교)</Text2>
        
            {isSaved && <SaveMessage>저장되었습니다</SaveMessage>} {/* 조건부 렌더링 */}
        
            <Button onClick={handleSave}>저장</Button>
            <Button onClick={onClose}>닫기</Button>
        </Box>
    </Modal>    
    );
};


const SaveMessage = styled.div`
    font-size: 18px;
    color: green;
    margin-bottom: 10px;
`;

export default Team_1_2;
