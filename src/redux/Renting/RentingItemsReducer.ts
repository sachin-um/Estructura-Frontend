import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import API from '../../lib/API';
import { RootState } from '../store';

const initialState: RentingItemsState = {
  error: null,
  rentingItems: [],
  reqStatus: 'idle',
};

export const fetchRentingItems = createAsyncThunk(
  'rentingItems/fetchRentingItems',
  async () => {
    const response = await API.get<RentingItem[]>('/rentingItems/all');
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
      });
  },
});

export const { setRentingItems } = RentingItemsSlice.actions;

export const getRentingItemsStatus = (state: RootState) =>
  state.rentingItems.reqStatus;

export const getRentingItemsError = (state: RootState) =>
  state.rentingItems.error;

export const selectAllRentingItems = (state: RootState) =>
  state.rentingItems.rentingItems;

export default RentingItemsSlice.reducer;
