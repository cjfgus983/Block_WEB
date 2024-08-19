import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/authSlice";

const MainPage = () => {
  const [userName, setUserName] = useState("");
  const [userImageUrl, setUserImageUrl] = useState("");
  const [contests, setContests] = useState([]);
  const { isLoggedIn } = useSelector((state) => state.auth); // 로그인 상태 가져오기
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/mypage", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });

  //       if (!response.ok) {
  //         throw new Error("데이터를 가져오는데 실패했습니다.");
  //       }

  //       const data = await response.json();
  //       setUserName(data.result.userName);
  //       setUserImageUrl(data.result.userImageUrl);
  //       setContests(data.result.contestList);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }
      console.error(`Token found: ${token}`);

      try {
        const response = await fetch("http://localhost:3000/mypage", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to fetch user info", errorData);
          throw new Error("Failed to fetch user info");
        }

        const data = await response.json();
        setUserName(data.result.name); // 받아온 사용자 이름 상태에 저장
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    if (isLoggedIn) {
      fetchUserInfo(); // 사용자가 로그인되어 있으면 사용자 정보 가져오기
    }
  }, [isLoggedIn]);

  return (
    <div>
      <div className="profile">
        <img src={userImageUrl} alt="User" />
        <h1>{userName} 님, 환영합니다!</h1>
      </div>
      {/* <div className="contests">
        {contests.map((contest) => (
          <div key={contest.contestId} className="contest-card">
            <img src={contest.contestImageUrl} alt={contest.contestName} />
            <h2>{contest.contestName}</h2>
            <p>{contest.contestHost}</p>
            <p>{contest.contestCategory}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MainPage;
