import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

import API from '../../lib/API';
import { RootState } from '../store';

const initialState: RetailItemState = {
  error: null,
  reqStatus: 'idle',
  retailItem: null,
};

export const fetchRetailItemByById = createAsyncThunk(
  'retailItems/fetchRetailItemByById',
  async (id: number) => {
    const response = await API.get<RetailItem>(`/retailitems/item/${id}`);
    return response.status === 200 ? response.data : null;
  },
);

export const addRetailItem = createAsyncThunk(
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

export const editRetailItem = createAsyncThunk(
  'retailItems/update',
  async (update: updateRetailItemParams, { rejectWithValue }) => {
    const response = await API.post<GenericAddOrUpdateResponse>(
      `retailitems/update/${update.retailItem.id}`,
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

export const deleteRetailItem = createAsyncThunk(
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

export const RetailItemSlice = createSlice({
  name: 'RetailItem',
  initialState,
  reducers: {
    setRetailItem(state, action: PayloadAction<RetailItem>) {
      state.retailItem = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRetailItemByById.pending, (state) => {
        state.reqStatus = 'loading';
      })
      .addCase(fetchRetailItemByById.fulfilled, (state, action) => {
        state.reqStatus = 'succeeded';
        state.retailItem = action.payload;
      })
      .addCase(fetchRetailItemByById.rejected, (state) => {
        state.reqStatus = 'failed';
        state.error = true;
      })
      .addCase(addRetailItem.fulfilled, (state, action) => {
        state.retailItem = action.payload;
        state.error = null;
        state.reqStatus = 'idle';
      })
      .addCase(editRetailItem.fulfilled, (state, action) => {
        state.retailItem = action.payload;
        state.error = null;
        state.reqStatus = 'idle';
      })
      .addCase(deleteRetailItem.fulfilled, (state, action) => {
        state.retailItem = null;
        state.error = null;
        state.reqStatus = 'idle';
      });
  },
});

export const { setRetailItem } = RetailItemSlice.actions;

export const getRetailItemStatus = (state: RootState) =>
  state.retailItem.reqStatus;

export const getRetailItemError = (state: RootState) => state.retailItem.error;

export const selectRetailItem = (state: RootState) =>
  state.retailItem.retailItem;

export default RetailItemSlice.reducer;
