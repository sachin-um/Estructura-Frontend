import { configureStore } from '@reduxjs/toolkit';

import CustomRequestReducer from './CustomRequests/CustomRequestReducer';
import UserAuthenticationReducer from './UserAuthenticationReducer';

export const store = configureStore({
  reducer: {
    customRequest: CustomRequestReducer,
    user: UserAuthenticationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
