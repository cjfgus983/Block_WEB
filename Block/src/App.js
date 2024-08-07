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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
