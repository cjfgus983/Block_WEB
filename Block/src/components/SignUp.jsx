import React, { useState } from "react";
import DaumPostcode from "react-daum-postcode";
import "./SignUp.css"; // 맞춤 스타일을 위한 CSS 파일

const SignUp = () => {
  const [form, setForm] = useState({
    userId: "",
    password: "",
    name: "",
    birthdate: "",
    phoneNumber: "",
    address: "",
    university: "",
    major: "",
    portfolio: "",
    interest: "",
    terms: false,
    marketing: false,
  });

  const [isPostcodeOpen, setIsPostcodeOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestBody = {
      providerId: 12345,
      email: form.userId,
      password: form.password,
      platform: "general",
      name: form.name,
      phoneNumber: form.phoneNumber,
      university: form.university,
      birthDay: form.birthdate,
      univMajor: form.major,
      portfolio: form.portfolio,
    };

    try {
      const response = await fetch(
        "http://13.209.114.87:8080/api/v1/auth/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // 수정된 부분
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        // 서버에서 에러 메시지를 반환하는 경우, 이를 읽어와 출력
        const errorData = await response.json();
        console.error("Error from server:", errorData);
        throw new Error(errorData.message || "회원가입에 실패했습니다.");
      }

      const data = await response.json();
      alert("회원가입에 성공했습니다!");
      // 회원가입 성공 후 추가 로직 (예: 리다이렉트)
    } catch (error) {
      console.error("Error during sign up:", error);
      alert(`회원가입 중 오류가 발생했습니다: ${error.message}`);
    }
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setForm({
      ...form,
      address: fullAddress,
    });
    setIsPostcodeOpen(false);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>회원 가입</h2>
      <div className="input-group">
        <input
          type="text"
          name="userId"
          value={form.userId}
          onChange={handleChange}
          placeholder="아이디 입력"
          className="input-id"
        />
        <button type="button">중복 확인</button>
      </div>
      <div className="input-group">
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호 입력 (영문자, 숫자, 특수 문자를 포함한 8자 이상)"
          className="input-password"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름 입력"
          className="input-name"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="birthdate"
          value={form.birthdate}
          onChange={handleChange}
          placeholder="생년월일 입력 (예: 20000101)"
          className="input-birth"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={handleChange}
          placeholder="핸드폰 번호 입력"
          className="input-phone"
        />
        <button type="button">본인 인증</button>
      </div>
      <div className="input-group">
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="주소 입력"
          className="input-address"
        />
        <button type="button" onClick={() => setIsPostcodeOpen(true)}>
          주소 찾기
        </button>
      </div>
      {isPostcodeOpen && (
        <div className="modal">
          <div className="modal-content">
            <DaumPostcode onComplete={handleComplete} />
            <button type="button" onClick={() => setIsPostcodeOpen(false)}>
              닫기
            </button>
          </div>
        </div>
      )}
      <div className="input-group">
        <input
          type="text"
          name="university"
          value={form.university}
          onChange={handleChange}
          placeholder="대학교 입력"
          className="input-school"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="major"
          value={form.major}
          onChange={handleChange}
          placeholder="대학교 전공 입력"
          className="input-major"
        />
      </div>
      <div className="input-group select-container">
        <select
          name="interest"
          value={form.interest}
          onChange={handleChange}
          className={`select-element ${!form.interest ? "placeholder" : ""}`}
        >
          <option value="" disabled hidden>
            관심 분야
          </option>
          <option value="개발">개발</option>
          {/* 추가 옵션 */}
        </select>
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
      <div className="terms-group">
        <div>
          <input
            type="checkbox"
            name="terms"
            checked={form.terms}
            onChange={handleChange}
          />
          <label>서비스 이용약관 및 개인정보 취급 방침 동의</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="marketing"
            checked={form.marketing}
            onChange={handleChange}
          />
          <label>마케팅 정보 수신 동의 (선택)</label>
        </div>
        <div className="check-all">
          <input
            type="checkbox"
            name="allTerms"
            checked={form.terms && form.marketing}
            onChange={() => {
              const allChecked = !(form.terms && form.marketing);
              setForm({ ...form, terms: allChecked, marketing: allChecked });
            }}
          />
          <label>모든 약관에 동의합니다.</label>
        </div>
      </div>
      <button type="submit" className="submitButton" disabled={!form.terms}>
        회원 가입 완료
      </button>
    </form>
  );
};

export default SignUp;
