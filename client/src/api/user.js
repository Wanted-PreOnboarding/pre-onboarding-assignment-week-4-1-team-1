import instance from './index';

class User {
  // 사용자 목록 
  async getUsers() {
    const res = await instance.get('/users');
    return res;
  }

  // 계좌 검색
  async detailUsers(id) {
    const res = await instance.get(`users/${id}`);
    return res;
  }

  // 사용자 검색
  async searchUsers() {
    const res = await instance.get('/users');
    return res;
  }

  // 사용자 추가
  async createUsers() {
    const res = await instance.post('/users');
    return res;
  }

  // 사용자 삭제
  async deleteUsers() {
    const res = await instance.delete('/users');
    return res;
  }

  // 사용자명 변경
  async updateUsers() {
    const res = await instance.put('/users');
    return res;
  }
}

export default new User();
