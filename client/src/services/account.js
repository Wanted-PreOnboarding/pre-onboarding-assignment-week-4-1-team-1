import instance from '../api';
import { getToken } from '../utils/token';

class AccountService {
  constructor() {
    this._limit = 10;
    this._accounts = null;
    this._fetch = instance;
  }

  async init() {
    if (!this._accounts) {
      const { data } = await this._fetch.get('/accounts');
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

    const { data, headers } = await this._fetch.get(query, {});
    const totalLength = headers['x-total-count'];

    return { data, meta: { totalLength } };
  }

  async searchAccounts(word) {
    const { data } = await this._fetch.get(`/accounts?q=${word}`, {});
    console.log(data);
    return data;
  }

  async getAnAccount(id) {
    const { data } = await this._fetch.get(`/accounts/${id}`, {});

    return data;
  }
}

export default new AccountService();
