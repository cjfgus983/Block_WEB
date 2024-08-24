import React, {useState, useRef, useEffect} from "react";
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
    const [allOptionsHidden, setAllOptionsHidden] = useState(true);

    const modifyProfileRef = useRef(null);
    const myPointRef = useRef(null);
    const savedContestRef = useRef(null);
    const matchingRef = useRef(null);
    const optionContainerHeight = 72;

    const [userInfo, setUserInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);

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

    useEffect(() => {
        setAllOptionsHidden(
            !showModifyProfile && !showMyPoint && !showSavedContest && !showMatching
        );
    }, [showModifyProfile, showMyPoint, showSavedContest, showMatching]);

    const handleModifyProfile = () => {
        setShowModifyProfile(!showModifyProfile);
        setShowMyPoint(false);
        setShowSavedContest(false);
        setShowMatching(false);
        console.log('Profile modification clicked');
    };

    const handleMyPoint = () => {
        setShowMyPoint(!showMyPoint);
        setShowModifyProfile(false);
        setShowSavedContest(false);
        setShowMatching(false);
        console.log('My points clicked');
    };

    const handleSavedContest = () => {
        setShowSavedContest(!showSavedContest);
        setShowModifyProfile(false);
        setShowMyPoint(false);
        setShowMatching(false);
        console.log('Saved contests clicked');
    };

    const handleMatching = () => {
        setShowMatching(!showMatching);
        setShowModifyProfile(false);
        setShowMyPoint(false);
        setShowSavedContest(false);
        console.log('About matching clicked');
    };

    useEffect(() => {
        const fetchInfo = async () => {
            setIsLoading(true);
            const token = localStorage.getItem('token');
            const url = `http://13.209.114.87:8080/mypage`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };
            try {
                const response = await fetch(url, options);
                // 응답 상태 확인
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                const data = await response.json();
                console.log(data.result);
                setUserInfo(data.result);

            } catch (error) {
                console.error(error);
                 alert("데이터를 가져오는 중 오류가 발생했습니다.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchInfo();
    }, [page]);

    return (
        <Container allOptionsHidden={allOptionsHidden}>
            <h2 style={{textAlign:"center", fontFamily:"Pretendard-Bold", paddingTop: '30px'}}>마이페이지</h2>
            {userInfo && (
                <ProfileContainer>
                    <div className="user-profile">
                        <img className="profile-img" src={profileImg} alt="Profile"/>
                        <p><span style={{fontFamily: "Pretendard-Bold"}}>{userInfo.name}</span><span> 님</span></p>
                    </div>
                    <div className='profile-info'>
                        <div className="school">
                            <img className="school-img" src={profile_school} alt="School"/>
                            <p>{userInfo.university}</p>
                        </div>
                        <div className="major">
                            <img className="major-img" src={profile_major} alt="Major"/>
                            <p>{userInfo.major}</p>
                        </div>
                    </div>
                </ProfileContainer>
            )}
            <OptionContainer>
                <button type="button" className="modifyProfile" onClick={handleModifyProfile}>
                    <img
                        className="option-modifyProfile"
                        src={showModifyProfile ? optionClicked_modifyProfile : option_modifyProfile}
                        alt="Modify Profile"
                    />
                </button>
                <button type="button" className="myPoint" onClick={handleMyPoint}>
                    <img
                        className="option-myPoint"
                        src={showMyPoint ? optionClicked_point : option_point}
                        alt="My Point"
                    />
                </button>
                <button type="button" className="savedContest" onClick={handleSavedContest}>
                    <img
                        className="option-savedContest"
                        src={showSavedContest ? optionClicked_savedContest : option_savedContest}
                        alt="Saved Contest"
                    />
                </button>
                <button type="button" className="matching" onClick={handleMatching}>
                    <img
                        className="option-matching"
                        src={showMatching ? optionClicked_matching : option_matching}
                        alt="Matching"
                    />
                </button>
            </OptionContainer>
            <OptionContent>
                <div ref={modifyProfileRef}>
                    {showModifyProfile && <ModifyProfile userInfo={userInfo}/>}
                </div>
                <div ref={myPointRef}>
                    {showMyPoint && <MyPoint userInfo={userInfo}/>}
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
    font-family: Pretendard-Regular;
    font-size: 28px;
    overflow-x: hidden;
    overflow-y: ${props => props.allOptionsHidden ? 'hidden' : 'auto'};
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 280px;
    padding-bottom: 126px;
    .user-profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 30px;
    }
    .profile-img {
        border-radius: 50%;
        height: 160px; width: 160px;
    }
    .profile-info {
        img {
            padding-right: 15px;
        }
        p {
            font-size: 28px;
        }
    }
    .school {
        width: 440px; height: 80px;
        border-bottom: solid 2px #989898;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .major {
        width: 440px; height: 80px;
        border-bottom: solid 2px #989898;
        padding-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .category {
        width: 440px; height: 80px;
        border-bottom: solid 2px #989898;
        padding-top: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
`;

const OptionContainer = styled.div`
    position: sticky;
    top: 0;
    height: 72px;
    align-items: center;
    text-align: center;
    background-color: #fff; 
    z-index: 100; 
    button {
        background: none;
        border: none;
    }
`;

const OptionContent = styled.div`
`;

export default MyPage;