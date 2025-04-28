import axios from "axios";

const token = localStorage.getItem('wemixt');

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://backend:3000/api/v1/',
  headers: { Authorization: `Bearer ${token}` }
});

export default instance;