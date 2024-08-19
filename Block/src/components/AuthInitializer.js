// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { login } from '../redux/authSlice';

// function AuthInitializer() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       // 여기에 토큰 검증 로직 추가
//       dispatch(login({ token, user: { name: '사용자 이름', email: '이메일' } }));
//     }
//   }, [dispatch]);

//   return null; // UI를 렌더링할 필요가 없는 컴포넌트
// }

// export default AuthInitializer;
