import { baseUrl } from '../index';
import { setAccessToken } from '../../utils/token';

class Auth {
  async login(email, password) {
    try {
      const res = await baseUrl.post('/login', {
        email: email,
        password: password,
      });

      setAccessToken(res.data.accessToken);
      alert('로그인에 성공하였습니다.');

      return res;
    } catch (error) {
      alert('로그인에 실패하였습니다.');
    }
  }
}

export default new Auth();
