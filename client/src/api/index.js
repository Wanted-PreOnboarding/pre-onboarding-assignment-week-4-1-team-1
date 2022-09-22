import axios from 'axios';

const instance = axios.create({
  baseUrl: 'localhost:4000'
})

export default instance;