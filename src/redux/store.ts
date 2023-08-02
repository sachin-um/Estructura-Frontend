import { configureStore } from '@reduxjs/toolkit';

import BlogsReducer from './BlogsReducer';
import ProjectReducer from './ProjectReducer';
import UserAuthenticationReducer from './UserAuthenticationReducer';

export const store = configureStore({
  reducer: {
    blog: BlogsReducer,
    project: ProjectReducer,
    user: UserAuthenticationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
