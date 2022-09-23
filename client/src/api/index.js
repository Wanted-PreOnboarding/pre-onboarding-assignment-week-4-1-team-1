import axios from 'axios';
import { getToken } from '../utils/token';

const instance = axios.create({
  baseUrl: '/',
  headers: { Authorization: `Bearer ${getToken()}` },
});

export default instance;
