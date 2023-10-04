import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAPI } from '../../api/getAPI';

export const fetchCategories = createAsyncThunk(
  'categories/fetchNewsStatus',
  async () => {
    const { data } = await getAPI('available/categories');

    return data;
  }
);

const initialState = {
  categories: [],
  status: 'loading'
};

export const categoriesSlice = createSlice({
  name: 'News',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategories.pending, state => {
      state.status = 'loading';
      console.log('fetchNews is pending');
    }),
      builder.addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload.categories;
        state.status = 'loaded';
        console.log('fetchNews is loaded');
      }),
      builder.addCase(fetchCategories.rejected, () => {
        console.log('fetchNews is ERROR');
      });
  }
});

export default categoriesSlice.reducer;
