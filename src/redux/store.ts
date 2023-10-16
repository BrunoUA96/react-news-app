import { useDispatch } from 'react-redux';

import { newsApi } from '@/api/getAPI';
import { configureStore } from '@reduxjs/toolkit';

import categorySlice from './slices/categorySlice';
import newsSlice from './slices/newsSlice';
import regionsSlice from './slices/regionsSlice';

export const store = configureStore({
  reducer: {
    news: newsSlice,
    category: categorySlice,
    regions: regionsSlice,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
