import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "", // 'username' 대신 'email' 사용
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      email: form.email, // 'username' 대신 'email' 사용
      password: form.password,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/auth/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        // 서버에서 에러 메시지를 반환하는 경우 이를 읽어와 출력
        const errorData = await response.json();
        console.error("Error from server:", errorData);
        throw new Error(errorData.message || "로그인에 실패했습니다.");
      }

      const data = await response.json();
      alert("로그인에 성공했습니다!");

      // 로그인 성공 후 추가 로직 (예: 토큰 저장, 페이지 이동)
      // 예: localStorage.setItem("token", data.token);
      // 예: window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error during login:", error);
      alert(`로그인 중 오류가 발생했습니다: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>로그인</h2>
        <p>
          <a href="#">블록</a>에서 맞춤 활동들을 찾으세요!
        </p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="form-group">
              <input
                className="input-id"
                type="text"
                id="email" // 'username' 대신 'email' 사용
                name="email" // 'username' 대신 'email' 사용
                placeholder="이메일"
                value={form.email} // 'username' 대신 'email' 사용
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
