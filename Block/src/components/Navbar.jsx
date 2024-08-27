import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { login, setUserDetails, logout } from "../redux/authSlice";
import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation(); // 현재 URL 경로 가져오기
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    window.location.href = "/intro";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(login({ token }));

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
          dispatch(setUserDetails(data.result)); // 사용자 정보를 전역 상태에 저장
        } catch (error) {
          console.error("Error fetching user info:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUserInfo();
    } else {
      setLoading(false);
    }
  }, [dispatch, location.pathname]); // location.pathname이 변경될 때마다 useEffect 재실행

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/mainpage">
          <img src="/img/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-right">
        {loading ? (
          <span>Loading...</span> // 로딩 중일 때 보여줄 메시지
        ) : isLoggedIn ? (
          <>
            <div className="navbar-user">
              <span>{user ? `${user.name} 님` : ""}</span>{" "}
              {/* 전역 상태에서 사용자 이름 가져오기 */}
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
