import { configureStore } from '@reduxjs/toolkit';

import BlogsReducer from './Blogs/BlogsReducer';
import SingleBlogReducer from './Blogs/SingleBlogReducer';
import UserAuthenticationReducer from './UserAuthenticationReducer';

export const store = configureStore({
  reducer: {
    blog: SingleBlogReducer,
    blogs: BlogsReducer,
    user: UserAuthenticationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
