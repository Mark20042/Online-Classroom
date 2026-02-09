import axios from "axios";

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: "/api",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      switch (status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem("authToken");
          window.location.href = "/login";
          break;
        case 403:
          console.error("Forbidden:", data.message);
          break;
        case 404:
          console.error("Not found:", data.message);
          break;
        case 500:
          console.error("Server error:", data.message);
          break;
        default:
          console.error("Error:", data.message || "An error occurred");
      }
    } else if (error.request) {
      // Request made but no response
      console.error("Network error: No response from server");
    } else {
      // Something else happened
      console.error("Error:", error.message);
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
