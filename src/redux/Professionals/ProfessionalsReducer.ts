import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

interface ProfessionalInfoState {
  error: null | string;
  professionals: Professional[];
  status: reqStatus;
}

const initialState: ProfessionalInfoState = {
  error: null,
  professionals: [],
  status: 'idle',
};

export const fetchProfessionals = createAsyncThunk(
  'professionals/fetchProfessionals',
  async () => {
    const response = await API.get<Professional[]>('/professionals/all');
    return response.status === 200 ? response.data : [];
  },
);

export const fetchProfessionalsRole = createAsyncThunk(
  'professionals/fetchProfessionalsRole',
  async (category: Role) => {
    const response = await API.get<Professional[]>(
      `professionals/all/${category}`,
    );
    return response.status === 200 ? response.data : [];
  },
);

export const ProfessionalsInfoSlice = createSlice({
  name: 'ProfessionalsInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfessionals.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProfessionals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.professionals = action.payload;
      })
      .addCase(fetchProfessionals.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message ?? 'Failed to fetch professionals';
      })
      .addCase(fetchProfessionalsRole.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProfessionalsRole.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.professionals = action.payload;
      })
      .addCase(fetchProfessionalsRole.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message ?? 'Failed to fetch professionals';
      });
  },
});

export const getProfessionalsStatus = (state: RootState) =>
  state.professionalsInfo.status;
export const getProfessionalsError = (state: RootState) =>
  state.professionalsInfo.error;
export const selectAllProfessionals = (state: RootState) =>
  state.professionalsInfo.professionals;

export default ProfessionalsInfoSlice.reducer;
