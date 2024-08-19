import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/authSlice";
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn } = useSelector((state) => state.auth); // 로그인 상태 가져오기
  const dispatch = useDispatch();
  const [userName, setUserName] = useState(""); // 사용자 이름 저장용 상태

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    window.location.href = "/intro";
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }
      const userId = 123;

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

    if (isLoggedIn) {
      fetchUserInfo(); // 사용자가 로그인되어 있으면 사용자 정보 가져오기
    }
  }, [isLoggedIn]);

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
            <button className="navbar-button" onClick={handleLogout}>
              로그아웃
            </button>
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
