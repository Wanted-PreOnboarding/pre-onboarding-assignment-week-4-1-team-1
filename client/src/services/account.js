import instance from '../api';

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

  async getAccountsByPage(page, filters) {
    this.init();
    //? 브로커 네임을 어떻게 처리할 것인가.
    let query = `accounts?_page=${page}&_limit=${this._limit}`;
    const { isActive, brokerId, status } = filters;

    if (isActive) query += `&is_acitve=${isActive}`;
    if (brokerId) query += `&broker_id=${brokerId}`;
    if (status) query += `&status=${status}`;

    const { data, headers } = await this._fetch.get(query);
    const totalLength = headers['x-total-count'];

    return { data, meta: { totalLength } };
  }
}

export default new AccountService();
