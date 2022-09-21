import axios from 'axios';

export const baseUrl = axios.create({
  baseUrl: 'localhost:4000',
});

export default baseUrl;
