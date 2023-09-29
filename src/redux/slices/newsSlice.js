import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNewsStatus', async () => {
   const baseURL = import.meta.env.VITE_API_URL;
   const apiKey = import.meta.env.VITE_API_KEY;

   const { data } = await axios.get(`${baseURL}latest-news`, {
      params: { apiKey },
   });

   return data;
});

const initialState = {
   news: [],
   status: 'loading',
};

export const newsSlice = createSlice({
   name: 'News',
   initialState,
   reducers: {
      addNews: (state) => {
         state.news.push('First news');
      },
      removeAllNews: (state) => {
         state.news = [];
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchNews.pending, (state) => {
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
   },
});

export const { addNews, removeAllNews } = newsSlice.actions;

export default newsSlice.reducer;
