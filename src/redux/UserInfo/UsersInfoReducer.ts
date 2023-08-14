import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

interface UserInfoState {
  error: null | string;
  mutated: boolean;
  status: reqStatus;
  users: User[];
}

const initialState: UserInfoState = {
  error: null,
  mutated: false,
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
  reducers: {
    setUsersMutated(state, action: PayloadAction<boolean>) {
      state.mutated = action.payload;
    },
  },
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

export const { setUsersMutated } = usersInfoSlice.actions;

export const getUsersMutated = (state: RootState) => state.usersInfo.mutated;
export const getUsersStatus = (state: RootState) => state.usersInfo.status;
export const getUsersError = (state: RootState) => state.usersInfo.error;
export const selectAllUsers = (state: RootState) => state.usersInfo.users;

export default usersInfoSlice.reducer;
