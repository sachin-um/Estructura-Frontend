import { type Reducer, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import API from '../../lib/API';
import { RootState } from '../store';

interface UserInfoState {
  error: null | string;
  status: reqStatus;
  users: baseUser[];
}

const initialState: UserInfoState = {
  error: null,
  status: 'idle',
  users: [],
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await API.get<baseUser[]>('/users/all');
  return response.status === 200 ? response.data : [];
});

export const userInfoSlice = createSlice({
  name: 'UserInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch users';
      });
  },
});

export const getUsersStatus = (state: RootState) => state.userInfo.status;
export const getUsersError = (state: RootState) => state.userInfo.error;
export const getAllUsers = (state: RootState) => state.userInfo.users;

export const userInfoReducer: Reducer<UserInfoState> = userInfoSlice.reducer;
