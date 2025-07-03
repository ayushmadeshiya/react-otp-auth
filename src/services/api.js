import axios from 'axios';

const API = axios.create({
  baseURL: 'https://d32neyt9p9wyaf.cloudfront.net/api/v3',
});

export const sendOTP = (mobile) => API.post('/otp-send', { mobile });
export const login = (mobile) => API.post('/login', { mobile });
export const register = (data) =>
  API.post('/register', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
export const getProfile = (user_id, token) =>
  API.get(`/post-details?user_id=${user_id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
