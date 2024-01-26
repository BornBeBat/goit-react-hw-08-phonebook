import { createSlice } from '@reduxjs/toolkit';

export const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter: (_, action) => action.payload,
  },
});

export const { updateFilter } = filterSlise.actions;
