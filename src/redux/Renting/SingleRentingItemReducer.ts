import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import API from '../../lib/API';
import { RootState } from '../store';

const initialState: RentingItemState = {
  error: null,
  rentingItem: null,
  reqStatus: 'idle',
};

export const fetchRentingItemById = createAsyncThunk(
  'rentingItems/fetchRentingItemById',
  async (id: number) => {
    const response = await API.get<RentingItem>(`/renting-items/item/${id}`);
    return response.status === 200 ? response.data : null;
  },
);

// ! Make sure to check the user is logged in before calling this function
export const addRentingItem = createAsyncThunk(
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
export const editRentingItem = createAsyncThunk(
  'rentingItems/update',
  async (update: updateRentingItemParams, { rejectWithValue }) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      `/renting-items/update/${update.rentingItem.id}`,
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
export const deleteRentingItem = createAsyncThunk(
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

export const RentingItemSlice = createSlice({
  name: 'RentingItem',
  initialState,
  reducers: {
    setRentingItem(state, action: PayloadAction<RentingItem>) {
      state.rentingItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRentingItemById.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchRentingItemById.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.rentingItem = action.payload;
      })
      .addCase(fetchRentingItemById.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(addRentingItem.fulfilled, (state, action) => {
        state.rentingItem = action.payload;
        state.error = null;
        state.reqStatus = 'idle';
      })
      .addCase(editRentingItem.fulfilled, (state, action) => {
        state.rentingItem = action.payload;
        state.error = null;
        state.reqStatus = 'idle';
      })
      .addCase(deleteRentingItem.fulfilled, (state, action) => {
        state.rentingItem = null;
        state.error = null;
        state.reqStatus = 'idle';
      });
  },
});

export const { setRentingItem } = RentingItemSlice.actions;

export const getRentingItemStatus = (state: RootState) =>
  state.rentingItem.reqStatus;

export const getRentingItemError = (state: RootState) =>
  state.rentingItem.error;

export const selectRentingItem = (state: RootState) =>
  state.rentingItem.rentingItem;

export default RentingItemSlice.reducer;
