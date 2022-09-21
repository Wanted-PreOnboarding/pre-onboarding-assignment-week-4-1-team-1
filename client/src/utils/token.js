// 토큰 저장
export const setToken = token => {
  localStorage.setItem('token', token);
};

// 로그인 여부
export const getToken = () => {
  return !!localStorage.getItem('token');
};