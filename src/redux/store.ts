import { configureStore } from '@reduxjs/toolkit';

import BlogsReducer from './BlogsReducer';
import UserReducer from './UserReducer';

export const store = configureStore({
  reducer: {
    blog: BlogsReducer,
    user: UserReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
