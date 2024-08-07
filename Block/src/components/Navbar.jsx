import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/mainpage">
          <img src="/img/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <div className="navbar-user">
          <img
            src="/img/welcome-background.png"
            alt="User Avatar"
            className="user-avatar"
          />
          <span>사용자 님</span>
        </div>
        <Link to="/mypage" className="navbar-button">
          마이페이지
        </Link>
        <Link to="/intro" className="navbar-button">
          로그아웃
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
