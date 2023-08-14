import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from './store';

import API from '../lib/API';

export interface UserState {
  ProfileImage: null | string;
  ProfileImageName: null | string;
  email: string;
  firstname: string;
  id: number;
  lastname: string;
  role: Role;
  serviceProviderType?: ServiceProviders;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface AuthenticationResponse extends ValidatedResponse, UserState {
  access_token: null | string;
  refresh_token: null | string;
  success: boolean;
}

export interface RefreshTokenResponse {
  access_token: null | string;
  message: null | string;
  refresh_token: null | string;
  success: boolean;
}

const initialState: {
  access_token: null | string;
  isAuthenticated: boolean;
  refresh_token: null | string;
  userState: UserState | null;
} = {
  access_token: localStorage.getItem('access_token') || null,
  isAuthenticated: false,
  refresh_token: localStorage.getItem('refresh_token') || null,
  userState: JSON.parse(localStorage.getItem('user') || 'null'),
};

export const signIn = createAsyncThunk(
  'user/signIn',
  async (signInRequest: SignInRequest, { rejectWithValue }) => {
    const response = await API.post<AuthenticationResponse>(
      '/auth/authenticate',
      signInRequest,
    );
    if (response.status !== 200 || response.data.success === false) {
      return rejectWithValue(response.data);
    }
    return response.data;
  },
);

export const signOut = createAsyncThunk('user/signOut', async () => {
  const response = await API.post('/auth/logout');
  if (response.status !== 200) {
    return response.data;
  }
  return response.data;
});

const UserAuthenticationSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    clean: (state) => {
      state.isAuthenticated = false;
      state.access_token = null;
      state.refresh_token = null;
      state.userState = null;
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
    },
    setTokens: (
      state,
      action: PayloadAction<{ access_token: string; refresh_token: string }>,
    ) => {
      localStorage.setItem('access_token', action.payload.access_token);
      localStorage.setItem('refresh_token', action.payload.refresh_token);
      state.isAuthenticated = true;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        API.defaults.headers.common.Authorization = null;
        state.isAuthenticated = false;
        state.access_token = null;
        state.refresh_token = null;
        state.userState = null;
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
      })
      .addCase(signIn.fulfilled, (state, action) => {
        if (action.payload.success === true) {
          state.isAuthenticated = action.payload.success;
          state.userState = {
            id: action.payload.id,
            ProfileImage: action.payload.ProfileImage,
            ProfileImageName: action.payload.ProfileImageName,
            email: action.payload.email,
            firstname: action.payload.firstname,
            lastname: action.payload.lastname,
            role: action.payload.role,
            serviceProviderType: action.payload.serviceProviderType,
          };
          localStorage.setItem('user', JSON.stringify(state.userState));
          state.access_token = action.payload.access_token;
          state.refresh_token = action.payload.refresh_token;
          if (action.payload.access_token !== null)
            localStorage.setItem('access_token', action.payload.access_token);
          if (action.payload.refresh_token !== null)
            localStorage.setItem('refresh_token', action.payload.refresh_token);
        }
      })
      .addCase(signIn.rejected, (state) => {
        state.isAuthenticated = false;
        state.userState = null;
        state.access_token = null;
        state.refresh_token = null;
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        API.defaults.headers.common.Authorization = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.userState = null;
        state.access_token = null;
        state.refresh_token = null;
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        API.defaults.headers.common.Authorization = null;
      });
  },
});

export const selectUser = (state: RootState) => state.user.userState;

export const selectRole = (state: RootState) => state.user.userState?.role;

export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;

export const { clean, setTokens } = UserAuthenticationSlice.actions;

export const getTokens = (state: RootState) => ({
  access_token: state.user.access_token,
  refresh_token: state.user.refresh_token,
});

export default UserAuthenticationSlice.reducer;
