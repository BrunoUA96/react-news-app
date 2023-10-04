import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAPI } from '../../api/getAPI';

export const fetchNews = createAsyncThunk(
  'news/fetchNewsStatus',
  async params => {
    const { data } = await getAPI('search', params);

    return data;
  }
);

const initialState = {
  news: [],
  status: 'loading'
};

export const newsSlice = createSlice({
  name: 'News',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.status = 'loading';
      console.log('fetchNews is pending');
    }),
      builder.addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload.news;
        state.status = 'loaded';
        console.log('fetchNews is loaded');
      }),
      builder.addCase(fetchNews.rejected, () => {
        console.log('fetchNews is ERROR');
      });
  }
});

export const { addNews, removeAllNews } = newsSlice.actions;

export default newsSlice.reducer;
