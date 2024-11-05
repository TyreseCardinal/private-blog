import axios from "axios";

// Create an instance of Axios
const axiosInstance = axios.create({
  // Set the base URL for all requests
  baseURL: "http://127.0.0.1:5000", // Adjust this to your API's base URL
  timeout: 10000, // Set a timeout limit (in milliseconds) for requests
  headers: {
    "Content-Type": "application/json", // Set the default content type
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the config here before sending the request
    // For example, you could add an authorization token to headers
    const token = localStorage.getItem("token"); // Assuming you're using localStorage for tokens
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle the error before the request is sent
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that falls within the range of 2xx causes this function to trigger
    return response;
  },
  (error) => {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // You can handle errors globally here
    console.error("Error response:", error.response);
    return Promise.reject(error);
  }
);

export default axiosInstance;
