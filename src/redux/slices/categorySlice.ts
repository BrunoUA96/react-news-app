import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface inicialStateInterface {
  activeCategory: string;
}

const initialState = {
  activeCategory: 'All',
} as inicialStateInterface;

export const categorySlice = createSlice({
  name: 'Category',
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setActiveCategory } = categorySlice.actions;

export const selectedCategory = (state: RootState) =>
  state.category.activeCategory;

export default categorySlice.reducer;
