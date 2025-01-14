// src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Adjust the URL based on your backend
});

// Add login request
export const login = (email, password) =>
  API.post('/auth/login', { email, password });

// Add Google login request
export const googleAuth = (code) =>
  API.get(`/auth/google?code=${code}`);


// Add signup request
export const signup = (userData) =>
  API.post('/auth/signup', userData);

// Add email verification request
export const verifyEmail = (email, verificationCode) =>
  API.post('/auth/verify-email', { email, verificationCode });

// Add profile completion request
export const completeProfile = (profileData) =>
  API.post('/auth/profile', profileData, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });

export default API;
