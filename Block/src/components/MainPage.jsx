import React from "react";
import "./MainPage.css";
import Card from "./Card";

const MainPage = () => {
  const top5Competitions = [
    {
      title: "비공학계 캡스톤디자인 경진대회",
      description:
        "2024학년도 1학기 비공학계 캡스톤디자인 경진대회 참여 학생 모집",
      imageUrl: "img/sample1.png",
      organization: "숭실대학교",
    },
    {
      title: "현장실습 브이로그 및 블로그 공모전",
      description: "2024년 1학기 현장실습 브이로그 및 블로그 포스팅 공모전",
      imageUrl: "img/sample2.png",
      organization: "숭실대학교",
    },
    {
      title: "세계기록유산 주제 애니메이션 공모전",
      description: "2024 세계기록유산 주제 애니메이션 공모전",
      imageUrl: "img/sample3.png",
      organization: "유네스코 국제기록유산센터",
    },
    {
      title: "전기사랑 미디어 콘텐츠대전",
      description: "2024 전기사랑 미디어 콘텐츠대전",
      imageUrl: "img/sample4.png",
      organization: "한국전기신문사",
    },
    {
      title: "한중 청소년 기업아이디어 공모전",
      description: "2024 한중 청소년 기업아이디어 공모전",
      imageUrl: "img/sample5.png",
      organization: "한국수력원자력",
    },
  ];

  const top5Activities = [
    {
      title: "ICT 학점연계 프로젝트 인턴십",
      description: "SW중심대학 ICT 학점 연계 프로젝트 인턴십 (국내 과정)",
      imageUrl: "img/sample6.png",
      organization: "숭실대학교",
    },
    {
      title: "함의토 27기 모집",
      description: "함의토 27기 모집: 브랜드로 세상을 바꾸자!",
      imageUrl: "img/sample7.png",
      organization: "한국소비자포럼 팀 화이트",
    },
    {
      title: "청년캠프단 모집",
      description: "전문가&인플루언서와의 독보적인 포트폴리오 만들기!",
      imageUrl: "img/sample8.png",
      organization: "청년캠프단",
    },
    {
      title: "SNS 서포터즈 모집",
      description: "한국고용정보원 SNS 서포터즈 모집",
      imageUrl: "img/sample9.png",
      organization: "한국고용정보원",
    },
    {
      title: "전국 대학생 통일논문 및 콘텐츠 공모전",
      description: "2024 전국 대학생 통일논문 및 콘텐츠 공모전",
      imageUrl: "img/sample10.png",
      organization: "서울경제신문",
    },
  ];

  return (
    <div className="main-page">
      <img
        src="/img/welcome-background.png"
        alt="welcome"
        className="welcome-img"
      />

      <section className="section">
        <h2>사용자 님 맞춤 공모전 TOP 5</h2>
        <div className="card-container">
          {top5Competitions.map((comp, index) => (
            <Card key={index} {...comp} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>사용자 님 맞춤 대외활동 TOP 5</h2>
        <div className="card-container">
          {top5Activities.map((activity, index) => (
            <Card key={index} {...activity} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainPage;
