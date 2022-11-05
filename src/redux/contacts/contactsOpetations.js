import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";

axios.defaults.baseURL = 'https://6365065a7b209ece0f551a33.mockapi.io/api/v1/';

export const fetchContact = createAsyncThunk('contacts/getAll',
  async (_, thunkApi) => {
    try {
      
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  });

export const addContact  = createAsyncThunk(
    'contacts/addContact ',
    async (newContact, thunkApi) => {
        try {
            const { data } = await axios.post('/contacts', newContact)
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact ',
    async (id, thunkApi) => {
        try {
            const { data } = await axios.delete(`/contacts/${id}`)
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
  }
)