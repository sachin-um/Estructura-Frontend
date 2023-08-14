import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

const initialState: ProjectsState = {
  error: null,
  mutated: false,
  projects: [],
  reqStatus: 'idle',
};

export const fetchProjectByProfessional = createAsyncThunk(
  'projects/fetchProjectsByProfessional',
  async (userId: number) => {
    const response = await API.get<Project[]>(`/projects/all/${userId}`);
    return response.status === 200 ? response.data : [];
  },
);

export const fetchProjects = createAsyncThunk(
  'Projects/fetchProjects',
  async () => {
    const response = await API.get<Project[]>('/projects/all');
    return response.status === 200 ? response.data : [];
  },
);

export const ProjectsSlice = createSlice({
  name: 'Projects',
  initialState,
  reducers: {
    setProjects(state, action: PayloadAction<Project[]>) {
      state.projects = action.payload;
    },
    setProjectsMutated(state, action: PayloadAction<boolean>) {
      state.mutated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectByProfessional.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchProjectByProfessional.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchProjectByProfessional.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(fetchProjects.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      });
  },
});

export const { setProjects, setProjectsMutated } = ProjectsSlice.actions;

export const getProjectsStatus = (state: RootState) => state.projects.reqStatus;

export const getProjectsError = (state: RootState) => state.projects.error;

export const selectAllProjects = (state: RootState) => state.projects.projects;

export const getProjectsMutated = (state: RootState) => state.projects.mutated;

export default ProjectsSlice.reducer;
