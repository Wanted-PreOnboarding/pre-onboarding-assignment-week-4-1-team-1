import instance from '../api';

class AccountService {
  constructor() {
    this._limit = 10;
    this._fetch = instance;
  }

  async getAccountsByPage(page, search, filters) {
    let query = `accounts?_page=${page}&_limit=${this._limit}`;
    const { isActive, brokerId, status } = filters;

    if (search) query += `&q=${search}`;
    if (isActive) query += `&is_acitve=${isActive}`;
    if (brokerId) query += `&broker_id=${brokerId}`;
    if (status) query += `&status=${status}`;

    const { data, headers } = await this._fetch.get(query);
    const totalLength = headers['x-total-count'];

    return { data, meta: { totalLength } };
  }
}

export default new AccountService();
