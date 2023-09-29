import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';
import categoriesSlice from './slices/categoriesSlice';

export const store = configureStore({
   reducer: {
      news: newsSlice,
      categories: categoriesSlice,
   },
});
