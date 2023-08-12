import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

const initialState: BlogsState = {
  blogs: [],
  error: null,
  reqStatus: 'idle',
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await API.get<Blog[]>('/blogs/all');
  return response.status === 200
    ? response.data.sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
      )
    : [];
});

export const BlogsSlice = createSlice({
  name: 'Blogs',
  initialState,
  reducers: {
    setBlogs(state, action: PayloadAction<Blog[]>) {
      state.blogs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      });
  },
});

export const { setBlogs } = BlogsSlice.actions;

export const getBlogsStatus = (state: RootState) => state.blogs.reqStatus;

export const getBlogsError = (state: RootState) => state.blogs.error;

export const selectAllBlogs = (state: RootState) => state.blogs.blogs;

export default BlogsSlice.reducer;
