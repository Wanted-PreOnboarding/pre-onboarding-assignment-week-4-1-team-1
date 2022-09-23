import axiosBase from '../api';
import { getToken } from '../utils/token';

class AccountService {
  constructor() {
    this._limit = 10;
    this._accounts = null;
    this._fetch = axiosBase;
  }

  async init() {
    if (!this._accounts) {
      //todo header 초기 세팅 작업 끝날 시 삭제
      const { data } = await this._fetch.get('/accounts', {
        headers: {
          authorization: `Bearer ${getToken()}`,
        },
      });
      this._accounts = data;
    }
  }

  async getAccountsByPage(page = 1, filters = {}) {
    this.init();

    let query = `accounts?_page=${page}&_limit=${this._limit}`;
    const { isActive, brokerName, status } = filters;

    if (isActive) query += `&is_acitve=${isActive}`;
    if (brokerName) query += `&broker_name=${brokerName}`;
    if (status) query += `&status=${status}`;
    //todo header 초기화 세팅 작업 끝날 시 삭제
    const { data, headers } = await this._fetch.get(query, {
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    });
    const totalLength = headers['x-total-count'];

    return { data, meta: { totalLength } };
  }
  async searchAccounts(word) {
    const { data } = await this._fetch.get(`/accounts?q=${word}`, {
      headers: { authorization: `Bearer ${getToken()}` },
    });
    console.log(data);
  }
  async getAnAccount(id) {
    const { data } = await this._fetch.get(`/accounts/${id}`, {
      headers: { authorization: `Bearer ${getToken()}` },
    });
    console.log(data);
  }
}

export default new AccountService();
