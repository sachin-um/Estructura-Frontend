import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import API from '../../lib/API';
import { RootState } from '../store';

const initialState: ProjectState = {
  error: null,
  project: null,
  reqStatus: 'idle',
};
export const fetchProjectByById = createAsyncThunk(
  'projects/fetchProjectByById',
  async (id: number) => {
    const response = await API.get<Project>(`/project/${id}`);
    return response.status === 200 ? response.data : null;
  },
);
export const addProject = createAsyncThunk(
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

export const editProject = createAsyncThunk(
  'projects/update',
  async (update: updateProjectParams, { rejectWithValue }) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      `/update/${update.project.id}`,
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
    const projectResponse = (await API.get<Project>(`/project/${id}`)).data;
    return projectResponse;
  },
);

export const deleteProject = createAsyncThunk(
  'project/delete',
  async (id: number, { rejectWithValue }) => {
    const response = await API.delete<GenericDeleteResponse>(`/delete/${id}`);
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

export const ProjectSlice = createSlice({
  name: 'Project',
  initialState,
  reducers: {
    setProject(state, action: PayloadAction<Project>) {
      state.project = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectByById.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchProjectByById.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.project = action.payload;
      })
      .addCase(fetchProjectByById.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.project = action.payload;
        state.error = null;
        state.reqStatus = 'idle';
      })
      .addCase(editProject.fulfilled, (state, action) => {
        state.project = action.payload;
        state.error = null;
        state.reqStatus = 'idle';
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.project = null;
        state.error = null;
        state.reqStatus = 'idle';
      });
  },
});

export const { setProject } = ProjectSlice.actions;

export const getProjectStatus = (state: RootState) => state.project.reqStatus;

export const getProjectError = (state: RootState) => state.project.error;

export const selectProject = (state: RootState) => state.project.project;

export default ProjectSlice.reducer;
