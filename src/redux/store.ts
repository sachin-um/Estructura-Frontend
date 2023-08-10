import { configureStore } from '@reduxjs/toolkit';

import BlogsReducer from './Blogs/BlogsReducer';
import SingleBlogReducer from './Blogs/SingleBlogReducer';
import ProjectsReducer from './Projects/ProjectsReducer';
import ProjectReducer from './Projects/SingleProjectReducer';
import RentingItemsReducer from './Renting/RentingItemsReducer';
import SingleRentingItemReducer from './Renting/SingleRentingItemReducer';
import RetailItemsReducer from './RetailItems/RetailItemsReducer';
import SingleRetailItemReducer from './RetailItems/SingleRetailItemReducer';
import UserAuthenticationReducer from './UserAuthenticationReducer';

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
    user: UserAuthenticationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
