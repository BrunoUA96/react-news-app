import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAPI } from '../../api/getAPI';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const { data } = await getAPI('available/categories');

    return data;
  },
);

interface inicialStateInterface {
  categories: string[];
  status: string;
}

const initialState = {
  categories: [],
  status: 'loading',
} as inicialStateInterface;

export const categoriesSlice = createSlice({
  name: 'Categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategories.pending, state => {
      state.status = 'loading';
    }),
      builder.addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
        state.status = 'loaded';
      }),
      builder.addCase(fetchCategories.rejected, () => {
        console.log('fetchCategories is ERROR');
      });
  },
});

export default categoriesSlice.reducer;
