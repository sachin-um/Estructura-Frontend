import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from './store';

interface User {
  access_token: null | string;
  email: null | string;
  first_name: null | string;
  last_name: null | string;
  refresh_token: null | string;
}

const initialState: { authenticated: boolean; user: User } = {
  authenticated: false,
  user: {
    access_token: null,
    email: null,
    first_name: null,
    last_name: null,
    refresh_token: null,
  },
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setNewTokens(
      state,
      action: PayloadAction<{ access_token: string; refresh_token: string }>,
    ) {
      const { access_token, refresh_token } = action.payload;
      state.authenticated = true;
      state.user.access_token = access_token;
      state.user.refresh_token = refresh_token;
    },
    setUserInfo(
      state,
      action: PayloadAction<{
        email: string;
        first_name: string;
        last_name: string;
      }>,
    ) {
      const { email, first_name, last_name } = action.payload;
      state.user.email = email;
      state.user.first_name = first_name;
      state.user.last_name = last_name;
    },
  },
});

export const { setNewTokens } = UserSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default UserSlice.reducer;
