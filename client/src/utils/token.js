// 토큰 저장
export const setToken = token => {
  localStorage.setItem('token', token);
};

// 토큰 여부
export const getToken = () => {
  return localStorage.getItem('token');
};
