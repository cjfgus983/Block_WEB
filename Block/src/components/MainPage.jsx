import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MainPage.css";
import Card from "./Card";
import Dummy from "../dummy/Dummy"; // dummy.js를 import

const MainPage = () => {
  const [sortOrder, setSortOrder] = useState("deadline");
  const navigate = useNavigate();

  // const top5Competitions = [
  //   {
  //     title: "비공학계 캡스톤디자인 경진대회",
  //     description:
  //       "2024학년도 1학기 비공학계 캡스톤디자인 경진대회 참여 학생 모집",
  //     imageUrl: "img/welcome-background.png",
  //     organization: "숭실대학교",
  //     deadline: "2024-08-15",
  //     code: "capstone", // Add code for navigation
  //   },
  //   {
  //     title: "현장실습 브이로그 및 블로그 공모전",
  //     description: "2024년 1학기 현장실습 브이로그 및 블로그 포스팅 공모전",
  //     imageUrl: "img/welcome-background.png",
  //     organization: "숭실대학교",
  //     deadline: "2024-08-10",
  //   },
  //   {
  //     title: "세계기록유산 주제 애니메이션 공모전",
  //     description: "2024 세계기록유산 주제 애니메이션 공모전",
  //     imageUrl: "img/welcome-background.png",
  //     organization: "유네스코 국제기록유산센터",
  //     deadline: "2024-08-20",
  //   },
  //   {
  //     title: "전기사랑 미디어 콘텐츠대전",
  //     description: "2024 전기사랑 미디어 콘텐츠대전",
  //     imageUrl: "img/welcome-background.png",
  //     organization: "한국전기신문사",
  //     deadline: "2024-08-05",
  //   },
  //   {
  //     title: "한중 청소년 기업아이디어 공모전",
  //     description: "2024 한중 청소년 기업아이디어 공모전",
  //     imageUrl: "img/welcome-background.png",
  //     organization: "한국수력원자력",
  //     deadline: "2024-08-25",
  //   },
  // ];

  // const top5Activities = [
  //   {
  //     title: "ICT 학점연계 프로젝트 인턴십",
  //     description: "SW중심대학 ICT 학점 연계 프로젝트 인턴십 (국내 과정)",
  //     imageUrl: "img/sample6.png",
  //     organization: "숭실대학교",
  //     deadline: "2024-08-15",
  //   },
  //   {
  //     title: "함의토 27기 모집",
  //     description: "함의토 27기 모집: 브랜드로 세상을 바꾸자!",
  //     imageUrl: "img/sample7.png",
  //     organization: "한국소비자포럼 팀 화이트",
  //     deadline: "2024-08-18",
  //   },
  //   {
  //     title: "청년캠프단 모집",
  //     description: "전문가&인플루언서와의 독보적인 포트폴리오 만들기!",
  //     imageUrl: "img/sample8.png",
  //     organization: "청년캠프단",
  //     deadline: "2024-08-10",
  //   },
  //   {
  //     title: "SNS 서포터즈 모집",
  //     description: "한국고용정보원 SNS 서포터즈 모집",
  //     imageUrl: "img/sample9.png",
  //     organization: "한국고용정보원",
  //     deadline: "2024-08-05",
  //   },
  //   {
  //     title: "전국 대학생 통일논문 및 콘텐츠 공모전",
  //     description: "2024 전국 대학생 통일논문 및 콘텐츠 공모전",
  //     imageUrl: "img/sample10.png",
  //     organization: "서울경제신문",
  //     deadline: "2024-08-25",
  //   },
  // ];

  const competitions = Dummy.map((item) => ({
    title: item.title,
    description: item.title, // 이 부분은 실제 description이 아니라 title이 사용되고 있습니다.
    imageUrl: item.poster, // poster를 사용하여 이미지 URL을 지정
    organization: item.school,
    deadline: item.date.split(" ~ ")[1].replace(" ", ""), // 마감일을 날짜 문자열에서 추출
    code: item.code, // code를 그대로 사용
  }));

  const sortItems = (items, order) => {
    return items.sort((a, b) => {
      if (order === "deadline") {
        return new Date(a.deadline) - new Date(b.deadline);
      } else if (order === "name") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  const sortedCompetitions = sortItems([...competitions], sortOrder);
  // const sortedActivities = sortItems([...top5Activities], sortOrder);

  const handleCardClick = (code) => {
    navigate(`/info/${code}`);
  };

  return (
    <div className="main-page">
      <div className="welcome-section">
        <img
          src="/img/welcome-background.png"
          alt="Welcome Background"
          className="welcome-img"
        />
      </div>
      <section className="section">
        <div className="section-header">
          <h2>사용자 님 맞춤 공모전</h2>
          <select
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="deadline">마감순</option>
            <option value="name">이름순</option>
          </select>
        </div>
        <div className="card-container">
          {sortedCompetitions.map((comp, index) => (
            <Card
              key={index}
              {...comp}
              onClick={() => handleCardClick(comp.code)} // Navigate on card click
            />
          ))}
        </div>
      </section>

      <section className="section2">
        <div className="section-header">
          <h2>사용자 님 맞춤 대외활동</h2>
          <select
            className="sort-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="deadline">마감순</option>
            <option value="name">이름순</option>
          </select>
        </div>
        {/* <div className="card-container">
          {sortedActivities.map((activity, index) => (
            <Card
              key={index}
              {...activity}
              onClick={() => handleCardClick(activity.code)} // Navigate on card click
            />
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default MainPage;
