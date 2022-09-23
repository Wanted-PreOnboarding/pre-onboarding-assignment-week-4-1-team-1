import instance from './index';
import customersService from '../services/customers';

// class Customers {
//   async getCustomersByPage(page) {
//     const res = await instance.get(`/customers?_page=${page}_limit=10`);
//     return res;
//   }

//   async searchCustomers(word) {
//     const res = await instance.get(`/customers?q=${word}`);
//     return res;
//   }
// }

// export default new Customers();

const getCustomersByPage = (page = 1, filters = {}) =>
  customersService.getCustomersByPage(page, filters);

const searchCustomers = word => instance.get(`customers/?q=${word}`);

const getACustomersById = id => instance.get(`customers/${id}`);

export { getCustomersByPage, searchCustomers, getACustomersById };
