import { useDispatch } from 'react-redux';

import { newsApi } from '@/api/getAPI';
import { configureStore } from '@reduxjs/toolkit';

import categorySlice from './slices/categorySlice';
import newsSlice from './slices/newsSlice';
import regionSlice from './slices/regionSlice';

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    news: newsSlice,
    category: categorySlice,
    region: regionSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
