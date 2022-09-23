import instance from './index';

class Customers {
  // 사용자 목록
  async getCustomers(page) {
    const res = await instance.get(`/customers?_page=${page}`);
    return res;
  }

  // 사용자 검색
  async searchCustomers(word) {
    const res = await instance.get(`/customers?q=${word}`);
    return res;
  }

  // 사용자 추가
  // async createCustomers() {
  //   const res = await instance.post('/customers');
  //   return res;
  // }

  // // 사용자 삭제
  // async deleteCustomers(id) {
  //   const res = await instance.delete(`/customers/${id}`);
  //   return res;
  // }

  // // 사용자명 변경
  // async updateCustomers(id) {
  //   const res = await instance.put(`/customers/${id}`);
  //   return res;
  // }

  // // 사용자명 필터
  // async filterCustomers(id) {
  //   const res = await instance.put(`/customers/${id}`);
  //   return res;
  // }

  // 사용자 상세
  // async detailCustomers(id) {
  //   const res = await instance.get(`customers/${id}`);
  //   return res;
  // }
}

export default new Customers();
