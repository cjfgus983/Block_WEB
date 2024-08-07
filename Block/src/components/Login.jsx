import React from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 import
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>로그인</h2>
        <p>
          <a href="#">블록</a>에서 맞춤 활동들을 찾으세요!
        </p>
        <form className="login-form">
          <div className="form-inputs">
            <div className="form-group">
              <input
                className="input-id"
                type="text"
                id="username"
                name="username"
                placeholder="아이디"
              />
            </div>
            <div className="form-group">
              <input
                className="input-pwd"
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
              />
            </div>
          </div>
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
        <div className="login-options">
          <Link to="/signup">
            <img src="/img/btn_signup.png" alt="Signup" className="sign" />
          </Link>
          <Link to="/signup">
            <img src="/img/btn_kakao.png" alt="Kakao" className="kakao" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
