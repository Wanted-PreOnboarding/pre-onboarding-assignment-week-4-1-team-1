import instance from './index';
import accountService from '../services/account';

const getAccountsByPage = (page = 1, filters = {}) =>
  accountService.getAccountsByPage(page, filters);

const searchAccounts = word => instance.get(`accounts/?q${word}`);

const getAnAccount = id => instance.get(`accounts/${id}`);

export { getAccountsByPage, searchAccounts, getAnAccount };
