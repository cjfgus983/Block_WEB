// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,  // 사용자 정보 저장
//   token: null,
//   isLoggedIn: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload.user; // 사용자 정보 저장
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     setUserDetails: (state, action) => {
//       state.user = action.payload; // 사용자 상세 정보 저장
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { login, setUserDetails, logout } = authSlice.actions;

// export default authSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     token: localStorage.getItem('token'), // 초기값을 로컬 스토리지에서 가져오기
//     isLoggedIn: false,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     logout: (state) => {
//       state.token = null;
//       localStorage.removeItem('token'); // 로그아웃 시 토큰 삭제
//       localStorage.removeItem('tokenExpiration');
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     token: localStorage.getItem('token'), // 로컬 스토리지에서 토큰 가져오기
//     isLoggedIn: !!localStorage.getItem('token'), // 토큰이 있으면 true로 설정
//   },
//   reducers: {
//     login: (state, action) => {
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//     },
//     logout: (state) => {
//       state.token = null;
//       state.isLoggedIn = false;
//       localStorage.removeItem('token'); // 로그아웃 시 토큰 삭제
//       localStorage.removeItem('tokenExpiration');
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;


// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'), 
    isLoggedIn: !!localStorage.getItem('token'), 
    user: null, // 사용자 정보를 저장할 필드 추가
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user; // 사용자 정보를 저장
      state.isLoggedIn = true;
    },
    setUserDetails: (state, action) => {
      state.user = action.payload; // 추가: 사용자 정보를 업데이트하는 액션
    },
    logout: (state) => {
      state.token = null;
      state.user = null; // 로그아웃 시 사용자 정보도 초기화
      state.isLoggedIn = false;
      localStorage.removeItem('token'); 
    },
  },
});

export const { login, logout, setUserDetails } = authSlice.actions;
export default authSlice.reducer;
