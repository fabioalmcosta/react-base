import axios from 'axios';

const api = axios.create({
  baseURL: 'https://teste.com',
});

export default api;
