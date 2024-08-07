import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import MyPage from './pages/myPage';
import Intro from './components/Intro';
import InfoTeam3 from './components/Info_team3';
import Test from './components/test';
import Info from "./pages/Info";
import InfoReview from "./pages/InfoReview";
import InfoSave from "./pages/InfoSave";
import ReviewDetail from "./pages/ReviewDetail";
import ReviewPay from "./pages/ReviewPay";
import ReviewWrite from "./pages/ReviewWrite";
import TeamMatch from "./pages/TeamMatch";
import MatchApply from "./pages/MatchApply";
import ShowApply from "./pages/ShowApply";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path='/intro' element={<Intro/>}/>
          <Route path='/Info_team3' element={<InfoTeam3/>}/>
          <Route path='/test' element={<Test/>}/>
          <Route path="/info/:title" element={<Info />} />
          <Route path="/infoReview/:title" element={<InfoReview />} />
          <Route path="/reviewWrite/:title" element={<ReviewWrite />} />
          <Route path="/infoSave" element={<InfoSave />} />
          <Route path="/reviewDetail" element={<ReviewDetail />} />
          <Route path="/reviewPay" element={<ReviewPay />} />
          <Route path="/teamMatch" element={<TeamMatch />} />
          <Route path="/matchApply" element={<MatchApply />} />
          <Route path="/showApply" element={<ShowApply />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
