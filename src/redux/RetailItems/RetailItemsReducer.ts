import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

const initialState: RetailItemsState = {
  error: null,
  reqStatus: 'idle',
  retailItems: [],
};

export const fetchRetailItemsThunk = createAsyncThunk(
  'RetailItems/fetchRetailItems',
  async () => {
    const response = await API.get<RetailItem[]>('/retailitems/all');
    return response.status === 200 ? response.data : [];
  },
);

export const addRetailItemThunk = createAsyncThunk(
  'retailItems/add',
  async (
    retailItemAddRequest: RetailItemAddOrUpdateRequest,
    { rejectWithValue },
  ) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      'retailitems/add',
      retailItemAddRequest,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('AddRetailItemResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    const id: number = response.data.id;
    const retailItem = (await API.get<RetailItem>(`/retailitems/item/${id}`))
      .data;
    return retailItem;
  },
);

export const editRetailItemThunk = createAsyncThunk(
  'retailItems/update',
  async (update: updateRetailItemParams, { rejectWithValue }) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      `retailitems/update/${update.retailItemId}`,
      update.updatedRetailItem,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('EditRetailItemResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    const id: number = response.data.id;
    const retailItemResponse = (
      await API.get<RetailItem>(`/retailitems/item/${id}`)
    ).data;
    return retailItemResponse;
  },
);

export const deleteRetailItemThunk = createAsyncThunk(
  'retailItem/delete',
  async (id: number, { rejectWithValue }) => {
    const response = await API.delete<GenericDeleteResponse>(
      `retailitems/delete/${id}`,
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('DeleteRetailItemResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    return id;
  },
);

export const RetailItemsSlice = createSlice({
  name: 'RetailItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRetailItemsThunk.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchRetailItemsThunk.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.retailItems = action.payload;
      })
      .addCase(fetchRetailItemsThunk.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(addRetailItemThunk.fulfilled, (state, action) => {
        state.retailItems.push(action.payload);
        state.error = null;
      })
      .addCase(editRetailItemThunk.fulfilled, (state, action) => {
        const index = state.retailItems.findIndex(
          (item) => item.id === action.payload.id,
        );
        if (index === -1) throw new Error('Retail Item not found');
        state.retailItems[index] = action.payload;
        state.error = null;
      })
      .addCase(deleteRetailItemThunk.fulfilled, (state, action) => {
        state.retailItems = state.retailItems.filter(
          (item) => item.id !== action.payload,
        );
      });
  },
});

export const getRetailItemsStatus = (state: RootState) =>
  state.retailItems.reqStatus;

export const getRetailItemsError = (state: RootState) =>
  state.retailItems.error;

export const selectAllRetailItems = (state: RootState) =>
  state.retailItems.retailItems;

export default RetailItemsSlice.reducer;
