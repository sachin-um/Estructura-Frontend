import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

const initialState: RentingItemsState = {
  error: null,
  mutated: false,
  rentingItems: [],
  reqStatus: 'idle',
};

export const fetchRentingItemByRenter = createAsyncThunk(
  'rentingItems/fetchRentingItemsByRenter',
  async (userId: number) => {
    const response = await API.get<RentingItem[]>(
      `/renting-items/allByUser/${userId}`,
    );
    return response.status === 200 ? response.data : [];
  },
);

export const fetchRentingItems = createAsyncThunk(
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

export const RentingItemsSlice = createSlice({
  name: 'RentingItems',
  initialState,
  reducers: {
    setRentingItems(state, action: PayloadAction<RentingItem[]>) {
      state.rentingItems = action.payload;
    },
    setRentingItemsMutated(state, action: PayloadAction<boolean>) {
      state.mutated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRentingItems.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchRentingItems.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.rentingItems = action.payload;
      })
      .addCase(fetchRentingItems.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(fetchRentingItemByRenter.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchRentingItemByRenter.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.rentingItems = action.payload;
      })
      .addCase(fetchRentingItemByRenter.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      });
  },
});

export const { setRentingItems, setRentingItemsMutated } =
  RentingItemsSlice.actions;

export const getRentingItemsMutated = (state: RootState) =>
  state.rentingItems.mutated;

export const getRentingItemsStatus = (state: RootState) =>
  state.rentingItems.reqStatus;

export const getRentingItemsError = (state: RootState) =>
  state.rentingItems.error;

export const selectAllRentingItems = (state: RootState) =>
  state.rentingItems.rentingItems;

export default RentingItemsSlice.reducer;
