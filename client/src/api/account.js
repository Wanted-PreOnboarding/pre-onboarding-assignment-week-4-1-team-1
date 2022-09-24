import instance from './index';
import accountService from '../services/account';

const getAccountsByPage = (page = 1, search, filters = {}) =>
  accountService.getAccountsByPage(page, search, filters);

const searchAccounts = word => instance.get(`accounts/?q=${word}`);

const getAnAccountById = id => instance.get(`/accounts/?user_id=${id}`);

export { getAccountsByPage, searchAccounts, getAnAccountById };
