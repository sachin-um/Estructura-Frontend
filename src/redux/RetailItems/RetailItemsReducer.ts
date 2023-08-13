import type { PayloadAction } from '@reduxjs/toolkit';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import API from '../../lib/API';

const initialState: RetailItemsState = {
  error: null,
  reqStatus: 'idle',
  retailItems: [],
};
export const fetchRetailItemByRetailer = createAsyncThunk(
  'RetailItems/fetchRetailItemsByRetailer',
  async (userId: number) => {
    const response = await API.get<RetailItem[]>(
      `/retailitems/store/${userId}`,
    );
    return response.status === 200 ? response.data : [];
  },
);

export const fetchRetailItems = createAsyncThunk(
  'RetailItems/fetchRetailItems',
  async () => {
    const response = await API.get<RetailItem[]>('/retailitems/all');
    return response.status === 200 ? response.data : [];
  },
);

export const fetchRetailItemByStore = createAsyncThunk(
  'retailItems/fetchRetailItemsByStore',
  async (storeId: number) => {
    const response = await API.get<RetailItem[]>(
      `retailitems/store/${storeId}`,
    );
    return response.status === 200 ? response.data : [];
  },
);

export const fetchRetailItemByCategory = createAsyncThunk(
  'retailItems/fetchRetailItemsByCategory',
  async (category: RetailItemType) => {
    const response = await API.get<RetailItem[]>(
      `retailitems/category/${category}`,
    );
    return response.status === 200 ? response.data : [];
  },
);

export const RetailItemsSlice = createSlice({
  name: 'RetailItems',
  initialState,
  reducers: {
    setRetailItems(state, action: PayloadAction<RetailItem[]>) {
      state.retailItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRetailItemByStore.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchRetailItemByStore.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.retailItems = action.payload;
      })
      .addCase(fetchRetailItemByStore.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(fetchRetailItemByCategory.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchRetailItemByCategory.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.retailItems = action.payload;
      })
      .addCase(fetchRetailItemByCategory.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(fetchRetailItems.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchRetailItems.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.retailItems = action.payload;
      })
      .addCase(fetchRetailItems.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(fetchRetailItemByRetailer.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchRetailItemByRetailer.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.retailItems = action.payload;
      })
      .addCase(fetchRetailItemByRetailer.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      });
  },
});

export const { setRetailItems } = RetailItemsSlice.actions;

export const getRetailItemsStatus = (state: RootState) =>
  state.retailItems.reqStatus;

export const getRetailItemsError = (state: RootState) =>
  state.retailItems.error;

export const selectAllRetailItems = (state: RootState) =>
  state.retailItems.retailItems;

export default RetailItemsSlice.reducer;
