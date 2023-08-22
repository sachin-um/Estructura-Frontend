import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

const initialState: BlogsState = {
  blogs: [],
  error: null,
  reqStatus: 'idle',
};

// ! Make sure to check the user is logged in before calling this
export const addBlogThunk = createAsyncThunk(
  'blogs/add',
  async (blogAddRequest: BlogAddOrUpdateRequest, { rejectWithValue }) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      '/blogs/add',
      blogAddRequest,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('AddBlogResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    const id: number = response.data.id;
    const blog = (await API.get<Blog>(`/blogs/blog/${id}`)).data;
    return blog;
  },
);

export const fetchBlogsThunk = createAsyncThunk(
  'blogs/fetchBlogs',
  async () => {
    const response = await API.get<Blog[]>('/blogs/all');
    return response.status === 200
      ? response.data.sort(
          (a, b) =>
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
        )
      : [];
  },
);

// ! Make sure to check the user is logged in before calling this
export const editBlogThunk = createAsyncThunk(
  'blogs/update',
  async (
    update: { blogId: number; updatedBlog: BlogAddOrUpdateRequest },
    { rejectWithValue },
  ) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      `/blogs/update/${update.blogId}`,
      update.updatedBlog,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('EditBlogResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    const id: number = response.data.id;
    const blogResponse = (await API.get<Blog>(`/blogs/blog/${id}`)).data;
    return blogResponse;
  },
);

// ! Make sure to check the user is logged in before calling this
export const deleteBlogThunk = createAsyncThunk(
  'blogs/delete',
  async (id: number, { rejectWithValue }) => {
    const response = await API.delete<GenericDeleteResponse>(
      `/blogs/delete/${id}`,
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('DeleteBlogResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    return id;
  },
);

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
      .addCase(addBlogThunk.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
        state.error = null;
        state.reqStatus = 'idle';
      })
      .addCase(fetchBlogsThunk.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchBlogsThunk.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogsThunk.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(editBlogThunk.fulfilled, (state, action) => {
        const index = state.blogs.findIndex(
          (blog) => blog.id === action.payload.id,
        );
        if (index === -1) throw new Error('Blog not found');
        state.blogs[index] = action.payload;
        state.error = null;
      })
      .addCase(deleteBlogThunk.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
      });
  },
});

export const { setBlogs } = BlogsSlice.actions;

export const getBlogsStatus = (state: RootState) => state.blogs.reqStatus;

export const getBlogsError = (state: RootState) => state.blogs.error;

export const selectAllBlogs = (state: RootState) => state.blogs.blogs;

export default BlogsSlice.reducer;
