import instance from '../api/index';
import { LiMIT_ITEM } from '../utils/itemLimit';
import { getTodayTime } from '../utils/getTodayTime';

class Customers {
  constructor() {
    this._limit = LiMIT_ITEM;
    this._fetch = instance;
  }

  async getCustomersByPage(page, search, filters) {
    let query = `customers?_page=${page}&_limit=${this._limit}`;
    const { isActive, isStaff } = filters;

    if (isActive) query += `&is_acitve=${isActive}`;
    if (isStaff) query += `&is_staff=${isStaff}`;
    if (search) query += `&q=${search}`;

    const { data, headers } = await this._fetch.get(query);
    const totalLength = headers['x-total-count'];

    return { data, meta: { totalLength } };
  }

  // 사용자 추가
  async createCustomers(uuid, e) {
    console.log(e);
    const res = await instance.post('/customers', {
      uuid,
      photo: e.target[0].value,
      name: e.target[1].value,
      email: e.target[2].value,
      age: e.target[3].value,
      gender_origin: e.target[4].value,
      birth_date: e.target[5].value,
      phone_number: e.target[6].value,
      address: e.target[7].value,
      detail_address: e.target[8].value,
      last_login: getTodayTime(),
      created_at: getTodayTime(),
      updated_at: getTodayTime(),
    });
    return res;
  }

  // 사용자 삭제
  async deleteCustomers(id) {
    const res = await instance.delete(`/customers/${id}`);
    return res;
  }

  // 사용자명 변경
  async updateCustomers(id, name) {
    const res = await instance.patch(`/customers/${id}`, { name });
    return res;
  }
}

export default new Customers();
