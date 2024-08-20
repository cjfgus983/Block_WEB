import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../redux/authSlice"; // login 액션도 추가
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth); // 로그인 상태 가져오기
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(""); // 사용자 이름 저장용 상태

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    window.location.href = "/intro"; // 로그아웃 후 페이지 이동
  };

  // 페이지가 로드될 때 토큰을 확인하고 로그인 상태 유지
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // 토큰이 있으면 로그인 상태를 true로 설정
      dispatch(login({ token }));

      // 토큰이 있을 때만 사용자 정보를 가져오기
      const fetchUserInfo = async () => {
        try {
          const response = await fetch("http://13.209.114.87:8080/mypage", {
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

      fetchUserInfo(); // 사용자 정보 가져오기
    }
  }, [dispatch]); // dispatch는 의존성 배열에 추가

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/mainpage">
          <img src="/img/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <>
            <div className="navbar-user">
              <img
                src="/img/welcome-background.png"
                alt="User Avatar"
                className="user-avatar"
              />
              <span>{userName} 님</span> {/* 사용자 이름 표시 */}
            </div>
            <Link to="/mypage" className="navbar-button">
              마이페이지
            </Link>
            <Link to="/intro" className="navbar-button" onClick={handleLogout}>
              로그아웃
            </Link>
          </>
        ) : (
          <Link to="/login" className="navbar-button">
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
