import { createSlice } from '@reduxjs/toolkit';

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

const initialState = {
  news: [],
  status: 'loading',
} as inicialStateInterface;

export const newsSlice = createSlice({
  name: 'News',
  initialState,
  reducers: {},
});

// export const {} = newsSlice.actions;

export default newsSlice.reducer;
