import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface initialStateInterface {
  activeRegion: string;
}

const initialState: initialStateInterface = {
  activeRegion: 'PT',
};

export const regionSlice = createSlice({
  name: 'Region',
  initialState,
  reducers: {
    setRegion: (state, action: PayloadAction<string>) => {
      state.activeRegion = action.payload;
    },
  },
});

export const { setRegion } = regionSlice.actions;

export const selectedRegion = (state: RootState) => state.region.activeRegion;

export default regionSlice.reducer;
