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
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="아이디"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" placeholder="이름" />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">생년월일</label>
            <input
              type="text"
              id="birthdate"
              name="birthdate"
              placeholder="예시: 20000101"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">핸드폰 번호</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="핸드폰 번호"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">주소 입력</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="주소 입력"
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="terms">약관 동의</label>
            <input type="checkbox" id="terms" name="terms" /> 서비스 이용약관 및
            개인정보 취급 방침 동의
            <br />
            <input type="checkbox" id="marketing" name="marketing" /> 마케팅
            정보 수신 동의 (선택)
          </div>
          <button type="submit" className="signup-button">
            회원 가입 완료
          </button>
        </form>
      </div>
    </div>
    </Container>
  );
};

const Container = styled.div `
    padding-top: 30px;
    background-color: #5382DF;
    font-family: Pretendard-Regular;
    font-size: 28px;
`;

export default ModifyProfile;
