import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

interface UserState {
  error: null | string;
  status: reqStatus;
  user: User | null;
}

const initialState: UserState = {
  error: null,
  status: 'idle',
  user: null,
};

export const fetchUserById = createAsyncThunk(
  'user/fetchUserById',
  async (id: number) => {
    const response = await API.get<User>(`/users/user/${id}`);
    return response.status === 200 ? response.data : null;
  },
);

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.user = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message ?? 'Failed to fetch user';
      });
  },
});

export const getUserStatus = (state: RootState) => state.specificUser.status;
export const getUserError = (state: RootState) => state.specificUser.error;
export const getUser = (state: RootState) => state.specificUser.user;

export default userSlice.reducer;
