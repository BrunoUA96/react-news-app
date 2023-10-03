import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';
import categoriesSlice from './slices/categoriesSlice';
import regionsSlice from './slices/regionsSlice';

export const store = configureStore({
   reducer: {
      news: newsSlice,
      categories: categoriesSlice,
      regions: regionsSlice,
   },
});
