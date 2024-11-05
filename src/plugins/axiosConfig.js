// Create a pre-configured instance of Axios
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000", // Backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor for adding JWT token to headers
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Retrieve token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
