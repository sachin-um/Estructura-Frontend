import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import API from '../lib/API';
import { RootState } from './store';

export interface Blog {
  content: string;
  createdBy: number;
  dateAdded: Date;
  id: number;
  mainImage: string;
  mainImageName: string;
  title: string;
}

const initialState: {
  blogs: Blog[];
  error: boolean | null;
  reqStatus: reqStatus;
} = {
  blogs: [],
  error: null,
  reqStatus: 'idle',
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await API.get<Blog[]>('/blogs/all');
  return response.status === 200 ? response.data : [];
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

export const getBlogsStatus = (state: RootState) => state.blog.reqStatus;

export const getBlogsError = (state: RootState) => state.blog.error;

export const selectAllBlogs = (state: RootState) => state.blog.blogs;

export default BlogsSlice.reducer;
