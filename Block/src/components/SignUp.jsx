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

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직 추가
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
      <div className="input-group">
        <select name="interest" value={form.interest} onChange={handleChange}>
          <option value="">관심 분야</option>
          {/* 추가 옵션 */}
        </select>
      </div>
      <a htmlFor="portfolio" className="file-label">
        포트폴리오(선택)
      </a>
      <div className="">
        <input
          type="file"
          name="portfolio"
          onChange={handleChange}
          className="file-input"
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
        <div>
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
