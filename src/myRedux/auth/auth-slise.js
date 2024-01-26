import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './auth-operations';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
};

export const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {})
      .addCase(logout.fulfilled, (state, action) => {});
  },
});
