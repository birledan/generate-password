import axios from 'axios';
import config from '../config';

const api = axios.create({
  baseURL: config.api_url,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  }
});

export default api;
