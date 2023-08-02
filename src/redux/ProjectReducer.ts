import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import API from '../lib/API';
import { RootState } from './store';

export interface Project {
  Document1: string;
  Document1Name: string;
  Document2: string;
  Document2Name: string;
  Document3: string;
  Document3Name: string;
  ExtraImage1: string;
  ExtraImage1Name: string;
  ExtraImage2: string;
  ExtraImage2Name: string;
  ExtraImage3: string;
  ExtraImage3Name: string;
  cost: number;
  description: string;
  id: number;
  location: string;
  mainImage: string;
  mainImageName: string;
  name: string;
  projectFromEstructura: boolean;
}

export interface ProjectAddOrUpdateRequest {
  content: string;
  cost: number;
  description: string;
  documents: FileList;
  extraImages: FileList;
  location: string;
  mainImage: FileList;
  name: string;
  professionalId: number;
  projectFromEstructura: boolean;
  title: string;
}

const initialState: {
  error: boolean | null;
  projects: Project[];
  reqStatus: reqStatus;
} = {
  error: null,
  projects: [],
  reqStatus: 'idle',
};

export const fetchProjectByProfessional = createAsyncThunk(
  'projects/fetchProjectsByProfessional',
  async (userId: number) => {
    const response = await API.get<Project[]>(`/all/${userId}`);
    return response.status === 200 ? response.data : [];
  },
);

export const fetchProjectByById = createAsyncThunk(
  'projects/fetchProjectByById',
  async (id: number) => {
    const response = await API.get<Project>(`/project/${id}`);
    return response.status === 200 ? response.data : null;
  },
);

export const addProject = createAsyncThunk(
  'project/add',
  async (projectAddRequest: ProjectAddOrUpdateRequest, { rejectWithValue }) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      '/add',
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
    const blog = (await API.get<Project>(`/project/${id}`)).data;
    return blog;
  },
);

interface updateProjectParams {
  project: Project;
  updatedProject: ProjectAddOrUpdateRequest;
}

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

export const ProjectsSlice = createSlice({
  name: 'Projects',
  initialState,
  reducers: {
    setProjects(state, action: PayloadAction<Project[]>) {
      state.projects = action.payload;
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
      .addCase(addProject.fulfilled, (state, action) => {
        state.projects.push(action.payload);
      })
      .addCase(editProject.fulfilled, (state, action) => {
        const index = state.projects.findIndex(
          (b) => b.id === action.payload.id,
        );
        state.projects[index] = action.payload;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        const index = state.projects.findIndex((b) => b.id === action.payload);
        state.projects.splice(index, 1);
      });
  },
});

export const { setProjects } = ProjectsSlice.actions;

export const getProjectsStatus = (state: RootState) => state.project.reqStatus;

export const getProjectsError = (state: RootState) => state.project.error;

export const selectAllProjects = (state: RootState) => state.project.projects;

export default ProjectsSlice.reducer;
