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

    const [movie, setMovie] = useState(null);
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
        const fetchMovies = async () => {
            setIsLoading(true);
            const url = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${page}`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMjhjZTE1MDcxOTI4YmY1MjFlMzczNTJiNmYxMTdkZiIsInN1YiI6IjY2MWNkOTgzZjNlMGRmMDE2M2E5NTg2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j90PFsY1a4nkgqMqWVK-aO0GE9zmozT37CxaXxMCctQ'
                }
            };
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                if (data.results && data.results.length > 5) {
                    setMovie(data.results[5]);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchMovies();
    }, [page]);

    return (
        <Container allOptionsHidden={allOptionsHidden}>
            <h2 style={{textAlign:"center", fontFamily:"Pretendard-Bold", paddingTop: '30px'}}>마이페이지</h2>
            {movie && (
                <ProfileContainer>
                    <div className="user-profile">
                        <img className="profile-img" src={profileImg} alt="Profile"/>
                        <p><span style={{fontFamily: "Pretendard-Bold"}}>{movie.id}</span><span> 님</span></p>
                        <img className="login-type" src={login_type1} alt="Login type" style={{width: "222px"}}/>
                    </div>
                    <div className='profile-info'>
                        <div className="school">
                            <img className="school-img" src={profile_school} alt="School"/>
                            <p>{movie.title}</p>
                        </div>
                        <div className="major">
                            <img className="major-img" src={profile_major} alt="Major"/>
                            <p>{movie.vote_average}</p>
                        </div>
                        <div className="category">
                            <img className="category-img" src={profile_like} alt="Category"/>
                            <img className="category-design" src={choice_design} alt="Design"/>
                            <img className="category-marketing" src={choice_marketing} alt="Marketing"/>
                            <img className="category-media" src={choice_media} alt="Media"/>
                            
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
    z-index: 99;
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
