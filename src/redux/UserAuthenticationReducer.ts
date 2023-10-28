import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from './store';

import API from '../lib/API';

const initialState: {
  accessToken: null | string;
  isAuthenticated: boolean;
  refreshToken: null | string;
  userState: UserState | null;
} = {
  accessToken: localStorage.getItem('accessToken') || null,
  isAuthenticated: false,
  refreshToken: localStorage.getItem('refreshToken') || null,
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
      state.accessToken = null;
      state.refreshToken = null;
      state.userState = null;
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    },
    setTokens: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>,
    ) => {
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
      state.isAuthenticated = true;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        API.defaults.headers.common.Authorization = null;
        state.isAuthenticated = false;
        state.accessToken = null;
        state.refreshToken = null;
        state.userState = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
      })
      .addCase(signIn.fulfilled, (state, action) => {
        if (action.payload.success === true) {
          state.isAuthenticated = action.payload.success;
          state.userState = {
            id: action.payload.id,
            email: action.payload.email,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            profileImage: action.payload.profileImage,
            profileImageName: action.payload.profileImageName,
            role: action.payload.role,
            serviceProviderType: action.payload.serviceProviderType,
          };
          localStorage.setItem('user', JSON.stringify(state.userState));
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
          if (action.payload.accessToken !== null)
            localStorage.setItem('accessToken', action.payload.accessToken);
          if (action.payload.refreshToken !== null)
            localStorage.setItem('refreshToken', action.payload.refreshToken);
        }
      })
      .addCase(signIn.rejected, (state) => {
        state.isAuthenticated = false;
        state.userState = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        API.defaults.headers.common.Authorization = null;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.userState = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        API.defaults.headers.common.Authorization = null;
      })
      .addCase(signOut.rejected, (state) => {
        state.isAuthenticated = false;
        state.userState = null;
        state.accessToken = null;
        state.refreshToken = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
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
  accessToken: state.user.accessToken,
  refreshToken: state.user.refreshToken,
});

export default UserAuthenticationSlice.reducer;
