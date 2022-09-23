import instance from '../api/index';

class Customers {
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
