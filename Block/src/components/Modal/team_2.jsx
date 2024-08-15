import React from 'react';
import {Modal, Box,Text,Text2,Button} from './team';
const Team_2 = ({ onClose }) => {
    

    return (
        <Modal>
            <Box>
                <Text>이름</Text>
                <Text2>학교:</Text2> 
                <Text2>전공:</Text2> 
                <Text2>파트:</Text2> 
                <Text2>team2모달</Text2> 
                <Button onClick={onClose}>닫기</Button>

            </Box>
        </Modal>  

    );
};


export default Team_2;