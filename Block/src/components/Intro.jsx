import React, { useEffect, useRef, useState } from "react";
import "./Intro.css";
import { Link } from "react-router-dom";

const Dot = ({ num, currentPage }) => {
  return (
    <div
      style={{
        width: 10,
        height: 10,
        border: "1px solid black",
        borderRadius: 999,
        backgroundColor: currentPage === num ? "black" : "transparent",
        transition: "background-color 0.5s",
      }}
    ></div>
  );
};

const Dots = ({ currentPage }) => {
  return (
    <div style={{ position: "fixed", top: "50%", right: 20, zIndex: 1000 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: 20,
          height: 100,
        }}
      >
        <Dot num={1} currentPage={currentPage} />
        <Dot num={2} currentPage={currentPage} />
        <Dot num={3} currentPage={currentPage} />
        <Dot num={4} currentPage={currentPage} />
      </div>
    </div>
  );
};

function Intro() {
  const DIVIDER_HEIGHT = 4;
  const outerDivRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/img/intro/intro1.png",
    "/img/intro/intro2.png",
    "/img/intro/intro3.png",
    "/img/intro/intro4.png",
  ];

  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = 800;

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + 50 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(3);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + 100 + DIVIDER_HEIGHT * 3,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(4);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(1);
        } else if (scrollTop >= pageHeight * 2 && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(2);
        } else if (scrollTop >= pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + 50 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(3);
        }
      }
    };

    const outerDiv = outerDivRef.current;
    if (outerDiv) {
      outerDiv.addEventListener("wheel", wheelHandler);
    }
    return () => {
      if (outerDiv) {
        outerDiv.removeEventListener("wheel", wheelHandler);
      }
    };
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div ref={outerDivRef} className="outer">
      <Dots currentPage={currentPage} />
      <div className="intro-hero">
        <img
          src={images[currentImageIndex]}
          alt="hero"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>블록이 처음이시라면?</h1>
          <Link to="/login" className="custom-button">
            바로 시작하기
          </Link>
        </div>
      </div>
      <div className="divider"></div>
      <div className="partner-universities">
        <h2>협력 대학교</h2>
        <p>블록은 현재 3개의 대학교와 함께하고 있습니다</p>
        <div className="universities-logos">
          <div className="university-logo">
            <img src="/img/intro/가톨릭대학교 로고.png" alt="가톨릭대학교" />
            <p>가톨릭대학교</p>
          </div>
          <div className="university-logo">
            <img src="/img/intro/숭실대학교 로고.png" alt="숭실대학교" />
            <p>숭실대학교</p>
          </div>
          <div className="university-logo">
            <img src="/img/intro/인하대학교 로고.png" alt="인하대학교" />
            <p>인하대학교</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="personalized-recommendations">
        <h2>개인 맞춤</h2>
        <p>본인에게 맞는 공모전, 대외 활동, 팀 매칭</p>
        <div className="recommendations">
          <div className="recommendation">
            <img src="/img/intro/1.png" alt="공모전" />
            <h3>맞춤 공모전 추천</h3>
            <p>어떤 공모전을 나가지? 맞춤 공모전을 추천해드려요</p>
          </div>
          <div className="recommendation">
            <img src="/img/intro/2.png" alt="대외활동" />
            <h3>맞춤 대외 활동 추천</h3>
            <p>어떤 대외 활동을 하지? 맞춤 대외 활동을 추천해드려요</p>
          </div>
          <div className="recommendation">
            <img src="/img/intro/3.png" alt="팀 매칭" />
            <h3>팀 매칭</h3>
            <p>누구와 팀을 하지? 당신과 맞는 팀원을 구해드려요</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="easy-connection">
        <h2>쉬운 연결</h2>
        <p>대학교 인증만 하면 쉽게 연결</p>
        <div className="connections">
          <div className="connection">
            <img src="/img/intro/4.png" alt="포트폴리오" />
            <h3>포트폴리오</h3>
            <p>포트폴리오를 등록하면 바로 팀 매칭할 수 있어요</p>
          </div>
          <div className="connection">
            <img src="/img/intro/5.png" alt="후기" />
            <h3>자세한 후기</h3>
            <p>공모전, 대외활동 후기를 자세하게 볼 수 있어요</p>
          </div>
          <div className="connection">
            <img src="/img/intro/6.png" alt="마이페이지" />
            <h3>마이페이지</h3>
            <p>저장한 공모전과 대외활동을 마이페이지에서 쉽게 볼 수 있어요</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
