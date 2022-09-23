import instance from '../api/index';

class Customers {
  constructor() {
    this._limit = 10;
    this._fetch = instance;
  }

  async getCustomersByPage(page, filters) {
    let query = `customers?_page=${page}&_limit=${this._limit}`;
    const { isActive, isStaff } = filters;

    if (isActive) query += `&is_acitve=${isActive}`;
    if (isStaff) query += `&is_staff=${isStaff}`;

    const { data, headers } = await this._fetch.get(query);
    const totalLength = headers['x-total-count'];

    return { data, meta: { totalLength } };
  }

  // 사용자 추가
  async createCustomers() {
    const res = await instance.post('/customers');
    return res;
  }

  // 사용자 삭제
  async deleteCustomers(id) {
    const res = await instance.delete(`/customers/${id}`);
    return res;
  }

  // 사용자명 변경
  async updateCustomers(id) {
    const res = await instance.put(`/customers/${id}`);
    return res;
  }
}

export default new Customers();
