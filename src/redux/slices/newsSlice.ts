import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAPI } from '../../api/getAPI';

interface params {
  category: string;
  page_number: number;
  page_size: number;
  country: string;
}

export type newsDTO = {
  news: newsInterface[];
};

export interface newsInterface {
  id: string;
  image: string;
  title: string;
  description: string;
  author: string;
}

interface inicialStateInterface {
  news: newsInterface[];
  status: string;
}

export const fetchNews = createAsyncThunk<newsDTO, params>(
  'news/fetchNewsStatus',
  async params => {
    const { data } = await getAPI('search', params);

    return data as newsDTO;
  },
);

const initialState = {
  news: [],
  status: 'loading',
} as inicialStateInterface;

export const newsSlice = createSlice({
  name: 'News',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchNews.pending, state => {
      state.status = 'loading';
    }),
      builder.addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload.news;
        state.status = 'loaded';
      }),
      builder.addCase(fetchNews.rejected, () => {
        console.log('fetchNews is ERROR');
      });
  },
});

// export const {} = newsSlice.actions;

export default newsSlice.reducer;
