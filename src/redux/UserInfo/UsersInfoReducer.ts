import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

interface UserInfoState {
  error: null | string;
  status: reqStatus;
  users: User[];
}

const initialState: UserInfoState = {
  error: null,
  status: 'idle',
  users: [],
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await API.get<User[]>('/users/all');
  return response.status === 200 ? response.data : [];
});

export const usersInfoSlice = createSlice({
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
        state.status = 'idle';
        state.error = action.error.message ?? 'Failed to fetch users';
      });
  },
});

export const getUsersStatus = (state: RootState) => state.usersInfo.status;
export const getUsersError = (state: RootState) => state.usersInfo.error;
export const selectAllUsers = (state: RootState) => state.usersInfo.users;

export default usersInfoSlice.reducer;
