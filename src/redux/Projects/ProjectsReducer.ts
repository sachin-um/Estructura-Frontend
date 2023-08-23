import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

const initialState: ProjectsState = {
  error: null,
  projects: [],
  reqStatus: 'idle',
};

export const fetchProjectsByUserIdThunk = createAsyncThunk(
  'Projects/fetchProjects',
  async (userId: number) => {
    const response = await API.get<Project[]>(`/projects/all/${userId}`);
    return response.status === 200 ? response.data : [];
  },
);

export const addProjectThunk = createAsyncThunk(
  'projects/add',
  async (projectAddRequest: ProjectAddOrUpdateRequest, { rejectWithValue }) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      'projects/add',
      projectAddRequest,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('AddProjectResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    const id: number = response.data.id;
    const project = (await API.get<Project>(`/projects/project/${id}`)).data;
    return project;
  },
);

export const editProjectThunk = createAsyncThunk(
  'projects/update',
  async (update: updateProjectParams, { rejectWithValue }) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      `/projects/update/${update.projectId}`,
      update.updatedProject,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('EditProjectResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    const id: number = response.data.id;
    const projectResponse = (await API.get<Project>(`projects/project/${id}`))
      .data;
    return projectResponse;
  },
);

export const deleteProjectThunk = createAsyncThunk(
  'projects/delete',
  async (id: number, { rejectWithValue }) => {
    const response = await API.delete<GenericDeleteResponse>(
      `projects/delete/${id}`,
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('DeleteProjectResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    return id;
  },
);

export const ProjectsSlice = createSlice({
  name: 'Projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsByUserIdThunk.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchProjectsByUserIdThunk.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchProjectsByUserIdThunk.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(addProjectThunk.fulfilled, (state, action) => {
        state.projects.push(action.payload);
        state.error = null;
      })
      .addCase(editProjectThunk.fulfilled, (state, action) => {
        const index = state.projects.findIndex(
          (project) => project.id === action.payload.id,
        );
        if (index === -1) throw new Error('Project not found');
        state.projects[index] = action.payload;
        state.error = null;
      })
      .addCase(deleteProjectThunk.fulfilled, (state, action) => {
        state.projects = state.projects.filter(
          (project) => project.id !== action.payload,
        );
        state.error = null;
      });
  },
});

export const getProjectsStatus = (state: RootState) => state.projects.reqStatus;

export const getProjectsError = (state: RootState) => state.projects.error;

export const selectAllProjects = (state: RootState) => state.projects.projects;

export default ProjectsSlice.reducer;
