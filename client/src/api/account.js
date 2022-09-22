import instance from './index';
import { setToken } from '../utils/token';

class Account {
  // 계좌 목록
  async getAccounts() {
    const res = await instance.get('/accounts', {
      headers: {
        Authorization: `Bearer ${setToken}`
      }
    });
    return res;
  }

  // 계좌 페이지네이션
  async getPageAccounts(page) {
    const res = await instance.get(`/accounts?_page=${page}&_limit=20`);
    return res;
  }

  // 계좌 상세
  async detailAccounts(id) {
    const res = await instance.get(`accounts/${id}`);
    return res;
  }

  // 계좌 검색
  async searchAccounts() {
    const res = await instance.get('accounts?q=South');
    return res;
  }
}

export default new Account();
