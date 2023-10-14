import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAPI } from '../../api/getAPI';
import { RootState } from '../store';

export const fetchRegions = createAsyncThunk(
  'regions/fetchNewsStatus',
  async () => {
    const { data } = await getAPI('available/regions');

    return data;
  },
);

interface initialStateInterface {
  regionsList: { [key: string]: string };
  activeRegion: string;
}

const initialState: initialStateInterface = {
  regionsList: {},
  activeRegion: 'PT',
};

export const regionsSlice = createSlice({
  name: 'Regions',
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.activeRegion = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchRegions.pending, () => {
      console.log('fetchRegions is pending');
    }),
      builder.addCase(fetchRegions.fulfilled, (state, action) => {
        state.regionsList = action.payload.regions;
      }),
      builder.addCase(fetchRegions.rejected, () => {
        console.log('fetchRegions is ERROR');
      });
  },
});

export const { setRegion } = regionsSlice.actions;

export default regionsSlice.reducer;

export const selectRegions = (state: RootState) => state.regions;
