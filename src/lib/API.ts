import axios from 'axios';
import jwt_decode from 'jwt-decode';

import { RefreshTokenResponse } from '../redux/UserAuthenticationReducer';

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
    const access_token = localStorage.getItem('access_token');
    // if token is present in the local storage, add it to the request's header
    if (access_token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${access_token}`;
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
    const refresh_token = localStorage.getItem('refresh_token');
    if (refresh_token) {
      // Send a request to get refreshed tokens using the refresh token
      // decode jwt and log the expiration time
      const decoded: { exp: number } = jwt_decode(refresh_token);
      console.log(
        `Refresh token expires at ${new Date(
          decoded.exp * 1000,
        ).toLocaleString()}`,
      );
      return API.post<RefreshTokenResponse>('auth/refresh-token', null, {
        headers: {
          Authorization: `Bearer ${refresh_token}`,
        },
      })
        .then((res) => {
          // Store new tokens
          if (res.status === 200) {
            if (
              res.data.access_token !== null &&
              res.data.refresh_token !== null
            ) {
              const decoded: { exp: number } = jwt_decode(
                res.data.refresh_token,
              );
              console.log(
                `Refresh token expires at ${new Date(
                  decoded.exp * 1000,
                ).toLocaleString()}`,
              );
              localStorage.setItem('access_token', res.data.access_token);
              localStorage.setItem('refresh_token', res.data.refresh_token);
            }
            // Set header as default for API and the current request
            const authHeader = `Bearer ${localStorage.getItem('access_token')}`;
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
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('role');
};

export default API;
