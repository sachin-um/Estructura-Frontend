import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

const initialState: RentingItemsState = {
  error: null,
  rentingItems: [],
  reqStatus: 'idle',
};

export const fetchRentingItemsThunk = createAsyncThunk(
  'rentingItems/fetchRentingItems',
  async () => {
    const response = await API.get<RentingItem[]>('/renting-items/all');
    return response.status === 200
      ? response.data.sort(
          (a, b) =>
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
        )
      : [];
  },
);

// ! Make sure to check the user is logged in before calling this function
export const addRentingItemThunk = createAsyncThunk(
  'rentingItems/add',
  async (
    rentingItemAddRequest: RentingItemAddOrUpdateRequest,
    { rejectWithValue },
  ) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      '/renting-items/add',
      rentingItemAddRequest,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('AddRentingItemResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    const id: number = response.data.id;
    const rentingItem = (
      await API.get<RentingItem>(`/renting-items/item/${id}`)
    ).data;
    return rentingItem;
  },
);

// ! Make sure to check the user is logged in before calling this function
export const editRentingItemThunk = createAsyncThunk(
  'rentingItems/update',
  async (update: updateRentingItemParams, { rejectWithValue }) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      `/renting-items/update/${update.rentingItemId}`,
      update.updatedRentingItem,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('EditRentingItemResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    const id: number = response.data.id;
    const rentingItemResponse = (
      await API.get<RentingItem>(`/rentingItems/rentingItem/${id}`)
    ).data;
    return rentingItemResponse;
  },
);

// ! Make sure to check the user is logged in before calling this function
export const deleteRentingItemThunk = createAsyncThunk(
  'rentingItems/delete',
  async (id: number, { rejectWithValue }) => {
    const response = await API.delete<GenericDeleteResponse>(
      `/renting-items/delete/${id}`,
    );
    if (response.status !== 200 || response.data.success === false) {
      if (response.status !== 200) {
        console.error('DeleteRentingItemResponse.status !== 200');
        console.table(response);
      }
      return rejectWithValue(response.data);
    }
    return id;
  },
);

export const RentingItemsSlice = createSlice({
  name: 'RentingItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRentingItemsThunk.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchRentingItemsThunk.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.rentingItems = action.payload;
      })
      .addCase(fetchRentingItemsThunk.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(addRentingItemThunk.fulfilled, (state, action) => {
        state.rentingItems.push(action.payload);
      })
      .addCase(editRentingItemThunk.fulfilled, (state, action) => {
        const index = state.rentingItems.findIndex(
          (rentingItem) => rentingItem.id === action.payload.id,
        );
        if (index === -1) throw new Error('RentingItem not found');
        state.rentingItems[index] = action.payload;
      })
      .addCase(deleteRentingItemThunk.fulfilled, (state, action) => {
        state.rentingItems = state.rentingItems.filter(
          (rentingItem) => rentingItem.id !== action.payload,
        );
      });
  },
});

export const getRentingItemsStatus = (state: RootState) =>
  state.rentingItems.reqStatus;

export const getRentingItemsError = (state: RootState) =>
  state.rentingItems.error;

export const selectAllRentingItems = (state: RootState) =>
  state.rentingItems.rentingItems;

export default RentingItemsSlice.reducer;
