import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/authSlice"; // setUserDetails 제거

import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://13.209.114.87:8080/api/v1/auth/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "로그인에 실패했습니다.");
      }

      if (data.isSuccess && data.result.accessToken) {
        const token = data.result.accessToken;
        const expirationTime = JSON.parse(atob(token.split(".")[1])).exp * 1000;

        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpiration", expirationTime);

        dispatch(login({ token }));
        navigate("/mainpage");
      } else {
        throw new Error(data.message || "Unexpected response structure.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert(`로그인 중 오류가 발생했습니다: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>로그인</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="form-group">
              <input
                className="input-id"
                type="text"
                id="email"
                name="email"
                placeholder="이메일"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                className="input-pwd"
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                value={form.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
        <div className="login-options">
          <a href="/signup">
            <img src="/img/btn_signup.png" alt="Signup" className="sign" />
          </a>
          <a href="/signup">
            <img src="/img/btn_kakao.png" alt="Kakao" className="kakao" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
