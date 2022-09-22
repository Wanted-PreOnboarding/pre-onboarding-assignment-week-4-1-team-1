import { baseUrl } from '../index';


class Auth {
  async login(email, password) {
    const res = await baseUrl.post('/login', {
      email: email,
      password: password,
    });

    return res;
  }
}

export default new Auth();
