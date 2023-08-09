import { configureStore } from '@reduxjs/toolkit';

import BlogsReducer from './Blogs/BlogsReducer';
import SingleBlogReducer from './Blogs/SingleBlogReducer';
import ProjectsReducer from './Projects/ProjectsReducer';
import ProjectReducer from './Projects/SingleProjectReducer';
import RentingItemsReducer from './Renting/RentingItemsReducer';
import SingleRentingItemReducer from './Renting/SingleRentingItemReducer';
import UserAuthenticationReducer from './UserAuthenticationReducer';
import { userInfoReducer } from './UserInfo/UserInfoReducer';

export const store = configureStore({
  reducer: {
    blog: SingleBlogReducer,
    blogs: BlogsReducer,
    project: ProjectReducer,
    projects: ProjectsReducer,
    rentingItem: SingleRentingItemReducer,
    rentingItems: RentingItemsReducer,
    user: UserAuthenticationReducer,
    userInfo: userInfoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
