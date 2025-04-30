import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Load from frontend/.env
});

console.log('VITE_API_URL:', import.meta.env.VITE_API_URL); // Debug

// Add request interceptor to include token dynamically
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('wemixt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    delete config.headers.Authorization;
  }
  return config;
});

export default instance;