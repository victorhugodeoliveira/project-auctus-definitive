import axios from 'axios';

const API_URL = 'http://192.168.0.15:8000';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Adicione esta linha
});

export default apiClient;