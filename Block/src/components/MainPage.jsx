import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";
import "./MainPage.css";

const MainPage = () => {
  const [contests, setContests] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("deadline");

  const fetchContests = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Access token is not available.");
      return;
    }

    try {
      const response = await fetch(`http://13.209.114.87:8080/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch contests");
      }

      const fetchedContests = data.result.contestList;
      const detailedContests = await fetchContestDetails(fetchedContests);

      // D-day까지 포함하고, D+ 이후의 공모전들은 필터링
      const filteredContests = detailedContests.filter(
        (contest) =>
          new Date(contest.endDate).setHours(0, 0, 0, 0) >=
          new Date().setHours(0, 0, 0, 0)
      );

      setContests(filteredContests);
      setHasMore(filteredContests.length > 0);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching contests:", error);
    }
  };

  const fetchContestDetails = async (contests) => {
    const token = localStorage.getItem("token");
    return await Promise.all(
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
        if (!response.ok) {
          throw new Error(
            detailData.message || "Failed to fetch contest details"
          );
        }
        return { ...contest, ...detailData.result };
      })
    );
  };

  useEffect(() => {
    fetchContests();
  }, []);

  const sortItems = (items, order) => {
    return items.sort((a, b) => {
      if (order === "deadline") {
        return new Date(a.endDate) - new Date(b.endDate);
      } else if (order === "name") {
        return new Date(b.endDate) - new Date(a.endDate);
      }
      return 0;
    });
  };

  const sortedContests = sortItems([...contests], sortOrder);

  return (
    <div>
      <div className="sort-section">
        <select
          className="sort-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="deadline">마감순</option>
          <option value="name">남은기간순</option>
        </select>
      </div>
      <InfiniteScroll
        dataLength={sortedContests.length}
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
          {sortedContests.map((contest, index) => (
            <Card
              key={index}
              title={contest.contestName}
              description={contest.contestCategory}
              imageUrl={contest.contestImageUrl}
              organization={contest.contestHost}
              deadline={contest.endDate} // endDate 사용
              contestId={contest.contestId}
              onClick={() => console.log("Card clicked!")}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default MainPage;
