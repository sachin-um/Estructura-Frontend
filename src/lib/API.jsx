import axios from "axios";

const baseURL = "http://localhost:8080/api/v1/";

const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Setup interceptors to work with the backen's authentication implementation
API.interceptors.request.use(
  (config) => {
    // Before sending the request, check if the access token is in the local storage
    const accessToken = localStorage.getItem("accessToken");
    // if token is present in the local storage, add it to the request's header
    if (accessToken && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  // Do not interfere with successful responses
  (response) => response,
  (error) => {
    const { response, config } = error;
    // Do not try to handle non 403 and 2nd attempts after refreshing tokens
    if (response.status !== 403 || config._retry) {
      return Promise.reject(error);
    }
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      // Send a request to get refreshed tokens using the refresh token
      return API.post("auth/refresh-token", null, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      })
        .then((res) => {
          // Store new tokens
          if (res.status === 200) {
            localStorage.setItem(
              "accessToken",
              res.data.access_token ?? localStorage.getItem("accessToken")
            );
            localStorage.setItem(
              "refreshToken",
              res.data.refresh_token ?? localStorage.getItem("refreshToken")
            );
            localStorage.setItem(
              "role",
              res.data.role ?? localStorage.getItem("role")
            );
            // Set header as default for API and the current request
            const authHeader = `Bearer ${localStorage.getItem("accessToken")}`;
            API.defaults.headers.common["Authorization"] = authHeader;
            config.headers.Authorization = authHeader;
            config._retry = true;
            // Retry current request
            return API(config);
          } else {
            clearTokens();
            return Promise.reject(res);
          }
        })
        .catch((refreshError) => {
          clearTokens();
          return Promise.reject(refreshError);
        });
    }
    return Promise.reject(error);
  }
);

export const clearTokens = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("role");
};

export default API;
