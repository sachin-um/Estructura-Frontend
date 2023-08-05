import { configureStore } from '@reduxjs/toolkit';

<<<<<<< HEAD
import BlogsReducer from './BlogsReducer';
import ProjectReducer from './ProjectReducer';
=======
import BlogsReducer from './Blogs/BlogsReducer';
import SingleBlogReducer from './Blogs/SingleBlogReducer';
>>>>>>> devel
import UserAuthenticationReducer from './UserAuthenticationReducer';

export const store = configureStore({
  reducer: {
<<<<<<< HEAD
    blog: BlogsReducer,
    project: ProjectReducer,
=======
    blog: SingleBlogReducer,
    blogs: BlogsReducer,
>>>>>>> devel
    user: UserAuthenticationReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
