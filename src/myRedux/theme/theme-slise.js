import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: true,
  reducers: {
    togleTheme: state => !state,
  },
});

export const { togleTheme } = themeSlice.actions;
