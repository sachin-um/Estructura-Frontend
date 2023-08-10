import { configureStore } from '@reduxjs/toolkit';

import BlogsReducer from './Blogs/BlogsReducer';
import ProjectReducer from './Projects/SingleProjectReducer';
import ProjectsReducer from './Projects/ProjectsReducer';
import RentingItemsReducer from './Renting/RentingItemsReducer';
import RetailItemsReducer from './RetailItems/RetailItemsReducer';
import SingleBlogReducer from './Blogs/SingleBlogReducer';
import SingleRentingItemReducer from './Renting/SingleRentingItemReducer';
import SingleRetailItemReducer from './RetailItems/SingleRetailItemReducer';
import SingleUserInfoReducer from './UserInfo/SingleUserInfoReducer';
import UserAuthenticationReducer from './UserAuthenticationReducer';
import UsersInfoReducer from './UserInfo/UsersInfoReducer';

export const store = configureStore({
  reducer: {
    blog: SingleBlogReducer,
    blogs: BlogsReducer,
    project: ProjectReducer,
    projects: ProjectsReducer,
    rentingItem: SingleRentingItemReducer,
    rentingItems: RentingItemsReducer,
    retailItem: SingleRetailItemReducer,
    retailItems: RetailItemsReducer,
    specificUser: SingleUserInfoReducer,
    user: UserAuthenticationReducer,
    usersInfo: UsersInfoReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
