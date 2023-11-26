import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5267',
});

export default apiClient;