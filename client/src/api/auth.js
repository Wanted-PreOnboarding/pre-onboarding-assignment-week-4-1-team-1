import instance from './index';

class Auth {
  async login(email, password) {
    const res = await instance.post('/login', {
      email: email,
      password: password,
    });

    return res;
  }
}

export default new Auth();
