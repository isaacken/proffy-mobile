import axios from 'axios';

const api = axios.create({
  baseURL: 'https://iproffy.herokuapp.com'
});

export default api;