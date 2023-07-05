import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
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
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // If not a request to refresh the token and there is a response
    // with status 401 or 403, try to refresh the token and retry the request
    if (originalRequest.url !== "/auth/refresh-token" && error.response) {
      if (
        (error.response.status == 401 || error.response.status == 403) &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        try {
          const refreshToken = localStorage.getItem("refreshToken");
          if (refreshToken) {
            API.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${refreshToken}`;
            const response = await API.post("/auth/refresh-token");
            // if a new token is received, save it to the local storage and retry the request
            if (response.status === 200) {
              localStorage.setItem("accessToken", response.data.access_token);
              localStorage.setItem("refreshToken", response.data.refresh_token);
              API.defaults.headers.common[
                "Authorization"
              ] = `Bearer ${response.data.access_token}`;
              return API(originalRequest);
            }
          }
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default API;
