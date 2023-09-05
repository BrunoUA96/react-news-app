import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   news: [],
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
});

export const { addNews, removeAllNews } = newsSlice.actions;

export default newsSlice.reducer;
