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

export interface BlogAddOrUpdateRequest {
  content: string;
  mainImage: FileList;
  title: string;
  userId: number;
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

export const fetchBlogById = createAsyncThunk(
  'blogs/fetchBlogById',
  async (id: number) => {
    const response = await API.get<Blog>(`/blogs/blog/${id}`);
    return response.status === 200 ? response.data : null;
  },
);

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

interface updateBlogParams {
  blog: Blog;
  updatedBlog: BlogAddOrUpdateRequest;
}

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
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      })
      .addCase(editBlog.fulfilled, (state, action) => {
        const index = state.blogs.findIndex((b) => b.id === action.payload.id);
        state.blogs[index] = action.payload;
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        const index = state.blogs.findIndex((b) => b.id === action.payload);
        state.blogs.splice(index, 1);
      });
  },
});

export const { setBlogs } = BlogsSlice.actions;

export const getBlogsStatus = (state: RootState) => state.blog.reqStatus;

export const getBlogsError = (state: RootState) => state.blog.error;

export const selectAllBlogs = (state: RootState) => state.blog.blogs;

export default BlogsSlice.reducer;
