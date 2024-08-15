import React from 'react';
import styled from 'styled-components';



const Try_again = ({ onClose }) => {
    // Add your code here

    return (
        <Modal>
            <Box>
                <Text>수정 실패</Text>
                <Text2>프로필 수정을 다시 시도하세요.</Text2>
                <Button onClick={onClose}>다시시도</Button>

            </Box>
        </Modal>    
    );
};

const Text = styled.div` 
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const Text2 = styled.div`
    font-size: 20px;
    margin-bottom: 20px;

`;


const Button = styled.button`
    width: 160px;
    height: 60px;
    background-color: white;
    border: none;
    border-radius: 21px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 20px;
    &:hover {
        background-color: #1d5ad4;
        color: white;
    }
`;

const Modal = styled.div`
    position: fixed;
    z-index: 100;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;  /* 수직 중앙 배치 */
    align-items: center;      /* 수평 중앙 배치 */
    padding: auto 0;
    background-color:white;
    margin: 5% auto;
    padding: 20px;
    border: black;
    width: 480px;
    height: 400px;
    border-radius: 1px;
    border: 2px solid gray;
`;

export default Try_again;