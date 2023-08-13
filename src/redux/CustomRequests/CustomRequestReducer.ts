import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

const initialState: CustomRequestState = {
  customRequest: null,
  error: null,
  reqStatus: 'idle',
};

export const fetchCustomRequestById = createAsyncThunk(
  'customRequests/fetchCustomRequestByById',
  async (id: number) => {
    const response = await API.get<CustomRequest>(`/customrequests/${id}`);
    return response.status === 200 ? response.data : null;
  },
);

export const addCustomRequest = createAsyncThunk(
  'customRequests/add',
  async (
    customRequestAddRequest: CustomRequestAddOrUpdateRequest,
    { rejectWithValue },
  ) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      'customrequests/add',
      customRequestAddRequest,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('AddCustomRequestResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    const id: number = response.data.id;
    const customRequest = (
      await API.get<CustomRequest>(`/customrequests/item/${id}`)
    ).data;
    return customRequest;
  },
);

export const editCustomRequest = createAsyncThunk(
  'customRequests/update',
  async (update: updateCustomRequestParams, { rejectWithValue }) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      `customrequests/update/${update.customRequest.id}`,
      update.updatedCustomRequest,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('EditCustomRequestResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    const id: number = response.data.id;
    const customRequestResponse = (
      await API.get<CustomRequest>(`/customrequests/item/${id}`)
    ).data;
    return customRequestResponse;
  },
);

export const deleteCustomRequest = createAsyncThunk(
  'customRequest/delete',
  async (id: number, { rejectWithValue }) => {
    const response = await API.delete<GenericDeleteResponse>(
      `customrequests/delete/${id}`,
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('DeleteCustomRequestResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    return id;
  },
);

export const CustomRequestSlice = createSlice({
  name: 'CustomRequest',
  initialState,
  reducers: {
    setCustomRequest(state, action: PayloadAction<CustomRequest>) {
      state.customRequest = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomRequestById.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchCustomRequestById.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.customRequest = action.payload;
      })
      .addCase(fetchCustomRequestById.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(addCustomRequest.fulfilled, (state, action) => {
        state.customRequest = action.payload;
        state.error = null;
        state.reqStatus = 'idle';
      })
      .addCase(editCustomRequest.fulfilled, (state, action) => {
        state.customRequest = action.payload;
        state.error = null;
        state.reqStatus = 'idle';
      })
      .addCase(deleteCustomRequest.fulfilled, (state, action) => {
        state.customRequest = null;
        state.error = null;
        state.reqStatus = 'idle';
      });
  },
});

export const { setCustomRequest } = CustomRequestSlice.actions;

export const getCustomRequestStatus = (state: RootState) =>
  state.customRequest.reqStatus;

export const getCustomRequestError = (state: RootState) =>
  state.customRequest.error;

export const selectCustomRequest = (state: RootState) => state.customRequest;

export default CustomRequestSlice.reducer;
