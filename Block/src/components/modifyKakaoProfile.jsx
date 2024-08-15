import React from "react";
import styled from "styled-components";
import "../assets/font/pretendard.css"
const ModifyProfile = () => {
    return (
    <Container>
        <div className="signup-container">
        <div className="signup-box">
        <form className="signup-form">
            
            <div className="form-group">
            <label htmlFor="university">대학교 입력</label>
            <input
                type="text"
                id="university"
                name="university"
                placeholder="대학교 입력"
            />
            </div>
            <div className="form-group">
            <label htmlFor="major">대학교 전공 입력</label>
            <input
                type="text"
                id="major"
                name="major"
                placeholder="대학교 전공 입력"
            />
            </div>
            <div className="form-group">
            <label htmlFor="portfolio">포트폴리오</label>
            <input type="file" id="portfolio" name="portfolio" />
            </div>
            <div className="form-group">
            <label htmlFor="interest">관심 분야</label>
            <select id="interest" name="interest">
                <option value="">선택하세요</option>
                <option value="option1">옵션 1</option>
                <option value="option2">옵션 2</option>
                <option value="option3">옵션 3</option>
            </select>
            </div>
            
        </form>
        </div>
    </div>
    </Container>
    ) ;
};

const Container = styled.div `
    padding-top: 30px;
    background-color: #5382DF;
    font-family: Pretendard-Regular;
    font-size: 28px;


`;

export default ModifyProfile;
