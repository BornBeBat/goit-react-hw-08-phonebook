import { createSlice } from '@reduxjs/toolkit';

export const filterSlise = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter: (state, action) => action.payload,
  },
});

export const { updateFilter } = filterSlise.actions;
