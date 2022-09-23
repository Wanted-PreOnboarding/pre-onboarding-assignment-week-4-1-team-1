// 토큰 저장
export const setToken = token => {
  sessionStorage.setItem('token', token);
};

// 토큰 여부
export const getToken = () => {
  return sessionStorage.getItem('token');
};
