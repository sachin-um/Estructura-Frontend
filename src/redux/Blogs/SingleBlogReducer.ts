import { StarRateTwoTone } from '@mui/icons-material';
import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import API from '../../lib/API';
import { RootState } from '../store';

const initialState: BlogState = {
  blog: null,
  error: null,
  reqStatus: 'idle',
};

export const fetchBlogById = createAsyncThunk(
  'blogs/fetchBlogById',
  async (id: number) => {
    const response = await API.get<Blog>(`/blogs/blog/${id}`);
    return response.status === 200 ? response.data : null;
  },
);

// ! Make sure to check the user is logged in before calling this function
export const addBlog = createAsyncThunk(
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

// ! Make sure to check the user is logged in before calling this function
export const editBlog = createAsyncThunk(
  'blogs/update',
  async (update: updateBlogParams, { rejectWithValue }) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      `/blogs/update/${update.blog.id}`,
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

// ! Make sure to check the user is logged in before calling this function
export const deleteBlog = createAsyncThunk(
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

export const BlogSlice = createSlice({
  name: 'Blog',
  initialState,
  reducers: {
    setBlog(state, action: PayloadAction<Blog>) {
      state.blog = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogById.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchBlogById.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.blog = action.payload;
      })
      .addCase(fetchBlogById.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.blog = action.payload;
        state.error = null;
        state.reqStatus = 'idle';
      })
      .addCase(editBlog.fulfilled, (state, action) => {
        state.blog = action.payload;
        state.error = null;
        state.reqStatus = 'idle';
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blog = null;
        state.error = null;
        state.reqStatus = 'idle';
      });
  },
});

export const { setBlog } = BlogSlice.actions;

export const getBlogStatus = (state: RootState) => state.blog.reqStatus;

export const getBlogError = (state: RootState) => state.blog.error;

export const selectBlog = (state: RootState) => state.blog.blog;

export default BlogSlice.reducer;
