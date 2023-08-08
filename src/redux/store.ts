import { configureStore } from '@reduxjs/toolkit';

import BlogsReducer from './Blogs/BlogsReducer';
import SingleBlogReducer from './Blogs/SingleBlogReducer';
import RentingItemsReducer from './Renting/RentingItemsReducer';
import SingleRentingItemReducer from './Renting/SingleRentingItemReducer';
import ProjectsReducer from './Projects/ProjectsReducer';
import ProjectReducer from './Projects/SingleProjectReducer';
import UserAuthenticationReducer from './UserAuthenticationReducer';

export const store = configureStore({
  reducer: {
    blog: SingleBlogReducer,
    blogs: BlogsReducer,
    rentingItem: SingleRentingItemReducer,
    rentingItems: RentingItemsReducer,
    project: ProjectReducer,
    projects: ProjectsReducer,
    user: UserAuthenticationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
