import instance from './index';
import customersService from '../services/customers';

const getCustomersByPage = (page = 1, filters = {}) =>
  customersService.getCustomersByPage(page, filters);

const searchCustomers = word => instance.get(`customers/?q=${word}`);

const getACustomersById = id => instance.get(`/customers/${id}`);

const getACustomerSetting = uuid => instance.get(`/customers/?uuid=${uuid}`);

const getCustomersAll = () => instance.get('customers');

export { getCustomersByPage, searchCustomers, getACustomersById, getACustomerSetting, getCustomersAll };

