import instance from './index';

class Customers {
  async getCustomers(page) {
    const res = await instance.get(`/customers?_page=${page}`);
    // const length = res.headers.get('x-total-count');
    // return {customers: res, meta: { length }};
    return res;
  }

  async searchCustomers(word) {
    const res = await instance.get(`/customers?q=${word}`);
    return res;
  }
}

export default new Customers();
