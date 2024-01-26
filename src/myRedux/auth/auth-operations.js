import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await instance.post('/users/signup', credentials);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await instance.post('/users/login', credentials);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const logout = createAsyncThunk('auth/logout', async credentials => {
  try {
    const { data } = await instance.post('/users/logout', credentials);
    return data;
  } catch (error) {
    return error.message;
  }
});
