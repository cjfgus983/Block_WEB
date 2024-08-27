import React, { useState } from "react";
import "./modifyProfile.css";
import styled from "styled-components";

const ModifyProfile = ({ userInfo }) => {
  const [form, setForm] = useState({
    university: userInfo.university || "",
    univMajor: userInfo.major || "",
    portfolio: userInfo.portfolio || "",
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
      userId: userInfo.userId,
      passWord: userInfo.passWord,
      birthDay: userInfo.birthDay,
      phoneNumber: userInfo.phoneNumber,
      address: userInfo.address,
      university: form.university,
      univMajor: form.univMajor,
      portfolio: form.portfolio,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://13.209.114.87:8080/mypage/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      const responseText = await response.text();

      if (!response.ok) {
        const errorData = responseText ? JSON.parse(responseText) : {};
        throw new Error(errorData.message || "정보 수정에 실패했습니다.");
      }

      alert("정보 수정에 성공했습니다!");
      // 정보 수정 후 페이지 새로고침
      window.location.reload();
    } catch (error) {
      alert(`정보 수정 중 오류가 발생했습니다: ${error.message}`);
    }
  };

  return (
    <Container>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="university"
            value={form.university}
            onChange={handleChange}
            placeholder="대학교 입력"
            className="input-school"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="univMajor"
            value={form.univMajor}
            onChange={handleChange}
            placeholder="대학교 전공 입력"
            className="input-major"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="portfolio"
            value={form.portfolio}
            onChange={handleChange}
            placeholder="포트폴리오(선택)"
            className="input-portfolio"
          />
        </div>
        <button type="submit" className="submitButton">
          수정 완료
        </button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #5382df;
  font-family: Pretendard-Regular;
  font-size: 28px;
`;

export default ModifyProfile;
