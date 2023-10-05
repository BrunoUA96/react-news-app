import { configureStore } from '@reduxjs/toolkit';

import categoriesSlice from './slices/categoriesSlice';
import newsSlice from './slices/newsSlice';
import regionsSlice from './slices/regionsSlice';

export const store = configureStore({
  reducer: {
    news: newsSlice,
    categories: categoriesSlice,
    regions: regionsSlice,
  },
});
