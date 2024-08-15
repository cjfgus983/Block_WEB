import React from 'react';
import styled from 'styled-components';

export const Modal = styled.div`
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: rgba(0, 0, 0, 0.4);
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;  /* 수직 중앙 배치 */
    align-items: center;      /* 수평 중앙 배치 */
    background-color:white;
    margin:  auto;
    padding: 20px;
    border: black;
    width: 480px;
    height: 600px;
    border-radius: 1px;
    border: 2px solid gray;
`;

export const Text = styled.div` 
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const Text2 = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
`;

export const Button = styled.button`
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

const Team = () => {
    return (
        <Modal>
            <Box>
                <Text></Text>
                <Text2></Text2> 
                <Button></Button>
            </Box>
        </Modal>  
    );
};

export default Team;
