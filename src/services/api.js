import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getQuestions = async () => {
  const response = await api.get('/questions/');
  return response.data;
};

export const getLearningHistory = async () => {
  const response = await api.get('/learning-history/');
  return response.data;
};
