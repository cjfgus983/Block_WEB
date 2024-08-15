import React from "react";
import "./Info_team3.css";

const InfoTeam3 = () => {
  return (
    <div className="info-container">
      <h2>지원자 A님의 정보</h2>
      <div className="back-button">
        <button onClick={() => window.history.back()}>&#8592;</button>
      </div>
      <div className="info-content">
        <div className="left-section">
          <div className="profile-image">
            <img src="img/welcome-background.png" alt="지원자 A님의 별점" />
          </div>
          <p className="profile-name">지원자 A님의 별점</p>
          <div className="rating">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <p className="rating-score">4.8 / 5.0</p>
          <div className="like-icon">
            <img src="/img/heart.png" alt="좋아요"></img>
          </div>
        </div>
        <div className="divider-line"></div>
        <div className="right-section">
          <p>
            <strong>이름 (닉네임) :</strong> 지원자 A
          </p>
          <p>
            <strong>학교 :</strong> 가톨릭대학교
          </p>
          <p>
            <strong>전공 :</strong> 미디어기술콘텐츠학과
          </p>
          <p>
            <strong>포트폴리오 :</strong> <a href="링크주소">링크 주소</a>
          </p>
          <p>
            <strong>지원 파트 :</strong>{" "}
            <span className="part-button">기획</span>
          </p>
          <h2 className="confidence-quote">“기획만큼은 자신있습니다!!!!”</h2>
        </div>
      </div>
    </div>
  );
};

export default InfoTeam3;
