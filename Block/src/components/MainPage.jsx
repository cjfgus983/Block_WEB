import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";
import "./MainPage.css";

const MainPage = () => {
  const [contests, setContests] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchContests = async () => {
    const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
    if (!token) {
      console.error("Access token is not available.");
      return;
    }

    try {
      const response = await fetch(`http://13.209.114.87:8080/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // 토큰을 헤더에 포함
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch contests");
      }

      // 기본 공모전 정보 저장
      setContests(data.result.contestList);
      setHasMore(data.result.contestList.length > 0);
      setPage((prev) => prev + 1);

      // 각 공모전의 상세 정보 가져오기
      fetchContestDetails(data.result.contestList);
    } catch (error) {
      console.error("Error fetching contests:", error);
    }
  };

  const fetchContestDetails = async (contests) => {
    const token = localStorage.getItem("token");
    const detailedContests = await Promise.all(
      contests.map(async (contest) => {
        const response = await fetch(
          `http://13.209.114.87:8080/contest/${contest.contestId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const detailData = await response.json();
        return { ...contest, endDate: detailData.result.endDate };
      })
    );

    setContests(detailedContests);
  };

  useEffect(() => {
    fetchContests();
  }, []);

  return (
    <div>
      <InfiniteScroll
        dataLength={contests.length}
        next={fetchContests}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>더 이상 불러올 데이터가 없습니다.</b>
          </p>
        }
      >
        <div className="card-container">
          {contests.map((contest) => (
            <Card
              key={contest.contestId}
              title={contest.contestName}
              description={contest.contestCategory}
              imageUrl={contest.contestImageUrl}
              organization={contest.contestHost}
              deadline={contest.endDate} // endDate 사용
              onClick={() => console.log("Card clicked!")}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MainPage;
