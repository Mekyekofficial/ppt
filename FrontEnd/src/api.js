import axios from 'axios';

const SERVER_URL = import.meta.env.PUBLIC_SERVER_URL;

const API = axios.create({
  // baseURL: SERVER_URL, // Adjust the URL based on your backend
  baseURL: "http://localhost:500",
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
