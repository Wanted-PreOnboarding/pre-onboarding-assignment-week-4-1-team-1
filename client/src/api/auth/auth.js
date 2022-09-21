import { baseUrl } from '../index';
import { setToken } from '../../utils/token';
import { Navigate } from 'react-router-dom';

class Auth {
  // 로그인
  async login(email, password) {
    try {
      const res = await baseUrl.post('/login', {
        email: email,
        password: password,
      });

      setToken(res.data.accessToken);
      <Navigate to='/' {...alert('로그인에 성공하였습니다.')} />

      return res;
    } catch (error) {
      alert('로그인에 실패하였습니다.');
    }
  }
}

export default new Auth();
