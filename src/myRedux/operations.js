import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'api';

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await api.getContacts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'addContact',
  async (data, thunkAPI) => {
    try {
      const response = await api.setContact(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await api.deleteContact(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
