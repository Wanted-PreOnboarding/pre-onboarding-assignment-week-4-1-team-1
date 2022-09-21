import { baseUrl } from '../index';
import { setAccessToken } from '../../utils/token';

class Auth {
  async login(email, password) {
    const res = await baseUrl.post('/login', {
      email: email,
      password: password,
    });

    if (res.status === 200) {
      setAccessToken(res.data.accessToken);
    }

    return res;
  }
}

export default new Auth();
