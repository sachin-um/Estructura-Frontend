import axios from 'axios';
import jwt_decode from 'jwt-decode';

import type { RefreshTokenResponse } from '../redux/UserAuthenticationReducer';

const baseURL = 'http://localhost:8080/api/v1/';

const API = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Setup interceptors to work with the backend's authentication implementation
API.interceptors.request.use(
  (config) => {
    // Before sending the request, check if the access token is in the local storage
    const accessToken = localStorage.getItem('accessToken');
    // if token is present in the local storage, add it to the request's header
    if (accessToken && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  // Do not interfere with successful responses
  (response) => {
    return response;
  },
  (error) => {
    const { config, response } = error;
    // Do not try to handle non 403 and 2nd attempts after refreshing tokens
    if (response.status !== 403 || config._retry) {
      return Promise.reject(error);
    }
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      // Send a request to get refreshed tokens using the refresh token
      // decode jwt and log the expiration time
      const decoded: { exp: number } = jwt_decode(refreshToken);
      console.log(
        `Refresh token expires at ${new Date(
          decoded.exp * 1000,
        ).toLocaleString()}`,
      );
      return API.post<RefreshTokenResponse>('auth/refresh-token', null, {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      })
        .then((res) => {
          // Store new tokens
          if (res.status === 200) {
            if (
              res.data.accessToken !== null &&
              res.data.refreshToken !== null
            ) {
              const decoded: { exp: number } = jwt_decode(
                res.data.refreshToken,
              );
              console.log(
                `Refresh token expires at ${new Date(
                  decoded.exp * 1000,
                ).toLocaleString()}`,
              );
              localStorage.setItem('accessToken', res.data.accessToken);
              localStorage.setItem('refreshToken', res.data.refreshToken);
            }
            // Set header as default for API and the current request
            const authHeader = `Bearer ${localStorage.getItem('accessToken')}`;
            API.defaults.headers.common['Authorization'] = authHeader;
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
  },
);

export const clearTokens = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('role');
};

export default API;
