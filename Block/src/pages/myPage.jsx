import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "../assets/font/pretendard.css";
import profileImg from "../assets/img/profile-img.jpg";
import login_type1 from "../assets/img/login_type.png";
import profile_school from "../assets/img/profile_school.png";
import profile_major from "../assets/img/profile_book.png";
import profile_like from "../assets/img/profile_like.png";
import choice_design from "../assets/img/choice_design.png";
import choice_marketing from "../assets/img/choice_marketing.png";
import choice_media from "../assets/img/choice_media.png";
import option_modifyProfile from "../assets/img/option_modifyProfile.png";
import option_point from "../assets/img/option_point.png";
import option_savedContest from "../assets/img/option_savedContest.png";
import option_matching from "../assets/img/option_matching.png";
import optionClicked_modifyProfile from "../assets/img/optionClicked_modifyProfile.png";
import optionClicked_point from "../assets/img/optionClicked_point.png";
import optionClicked_savedContest from "../assets/img/optionClicked_savedContest.png";
import optionClicked_matching from "../assets/img/optionClicked_matching.png";

import ModifyProfile from "../components/modifyProfile";
import MyPoint from "../components/myPoint";
import AboutMatching from "../components/aboutMatching";
import SavedContest from "../components/savedContest";

const MyPage = () => {
    const [showModifyProfile, setShowModifyProfile] = useState(false);
    const [showMyPoint, setShowMyPoint] = useState(false);
    const [showSavedContest, setShowSavedContest] = useState(false);
    const [showMatching, setShowMatching] = useState(false);

    const modifyProfileRef = useRef(null);
    const myPointRef = useRef(null);
    const savedContestRef = useRef(null);
    const matchingRef = useRef(null);
    const optionContainerHeight = 72; // OptionContainer의 높이(px)

    useEffect(() => {
        const adjustScroll = (ref) => {
            if (ref.current) {
                const offsetTop = ref.current.offsetTop - optionContainerHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        };

        if (showModifyProfile) {
            adjustScroll(modifyProfileRef);
        } else if (showMyPoint) {
            adjustScroll(myPointRef);
        } else if (showSavedContest) {
            adjustScroll(savedContestRef);
        } else if (showMatching) {
            adjustScroll(matchingRef);
        }
    }, [showModifyProfile, showMyPoint, showSavedContest, showMatching]);

    const handleModifyProfile = () => {
        setShowModifyProfile(!showModifyProfile);
        setShowMyPoint(false);
        setShowSavedContest(false);
        setShowMatching(false);
        console.log('프로필 수정 클릭됨');
    };

    const handleMyPoint = () => {
        setShowMyPoint(!showMyPoint);
        setShowModifyProfile(false);
        setShowSavedContest(false);
        setShowMatching(false);
        console.log('내 포인트 클릭됨');
    };

    const handleSavedContest = () => {
        setShowSavedContest(!showSavedContest);
        setShowModifyProfile(false);
        setShowMyPoint(false);
        setShowMatching(false);
        console.log('저장한 공모전 클릭됨');
    };

    const handleMatching = () => {
        setShowMatching(!showMatching);
        setShowModifyProfile(false);
        setShowMyPoint(false);
        setShowSavedContest(false);
        console.log('about 매칭 클릭됨');
    };

    return (
        <Container>
            <h2 style={{ textAlign: "center", fontFamily: "Pretendard-Bold", paddingTop: '30px' }}>마이페이지</h2>
            <ProfileContainer>
                <div className="user-profile">
                    <img className="profile-img" src={profileImg} alt={profileImg} />
                    <p><span style={{ fontFamily: "Pretendard-Bold" }}>사용자</span><span> 님</span></p>
                    <img className="login-type" src={login_type1} alt={login_type1} style={{ width: "222px" }} />
                </div>
                <div className='profile-info'>
                    <div className="school">
                        <img className="school-img" src={profile_school} alt={profile_school} />
                        <p>숭실대학교</p>
                    </div>
                    <div className="major">
                        <img className="major-img" src={profile_major} alt={profile_major} />
                        <p>글로벌미디어학부</p>
                    </div>
                    <div className="category">
                        <img className="category-img" src={profile_like} alt={profile_like} />
                        <img className="category-design" src={choice_design} alt={choice_design} />
                        <img className="category-marketing" src={choice_marketing} alt={choice_marketing} />
                        <img className="category-media" src={choice_media} alt={choice_media} />
                    </div>
                </div>
            </ProfileContainer>
            <OptionContainer>
                <button type="button" className="modifyProfile" onClick={handleModifyProfile}>
                    <img
                        className="option-modifyProfile"
                        src={showModifyProfile ? optionClicked_modifyProfile : option_modifyProfile} alt={option_modifyProfile}
                    />
                </button>
                <button type="button" className="myPoint" onClick={handleMyPoint}>
                    <img
                        className="option-myPoint"
                        src={showMyPoint ? optionClicked_point : option_point} alt={option_point}
                    />
                </button>
                <button type="button" className="savedContest" onClick={handleSavedContest}>
                    <img
                        className="option-savedContest"
                        src={showSavedContest ? optionClicked_savedContest : option_savedContest} alt={option_savedContest}
                    />
                </button>
                <button type="button" className="matching" onClick={handleMatching}>
                    <img
                        className="option-matching"
                        src={showMatching ? optionClicked_matching : option_matching} alt={option_matching}
                    />
                </button>
            </OptionContainer>
            <OptionContent>
                <div ref={modifyProfileRef}>
                    {showModifyProfile && <ModifyProfile />}
                </div>
                <div ref={myPointRef}>
                    {showMyPoint && <MyPoint />}
                </div>
                <div ref={savedContestRef}>
                    {showSavedContest && <SavedContest />}
                </div>
                <div ref={matchingRef}>
                    {showMatching && <AboutMatching />}
                </div>
            </OptionContent>
        </Container>
    );
};

const Container = styled.div`
    min-width: 1440px; 
    width: 100%;
    height: 100%;
    font-family: Pretendard-Regular;
    font-size: 24px; 
    margin: 0;
    position: relative;
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    padding-bottom: 20px;

    .user-profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 30px;
    }

    .profile-img {
        border-radius: 50%;
        height: 160px; 
        width: 160px;
    }

    .profile-info {
        img {
            padding-right: 15px;
        }
        p {
            font-size: 20px; 
        }
    }

    .school, .major, .category {
        width: 440px; 
        height: 80px;
        border-bottom: solid 2px #989898;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .major {
        padding-top: 20px;
    }

    .category {
        padding-top: 20px;
    }
`;
const OptionContainer = styled.div`
    position: sticky;
    top: 0;
    height: 72px; 
    min-width: 1440px; 
    display: flex;  
    justify-content: center;
    align-items: center;
    background-color: #fff;
    z-index: 100;
    margin: 0 auto;  
    button {
        background: none;
        border: none;
        padding: 0; 
        margin: 0 10px;
    }
        img {
        display: block;
    }
`;

const OptionContent = styled.div`
    padding-top: 0; 
`;

export default MyPage;
