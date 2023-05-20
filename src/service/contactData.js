import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContact = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const  data  = await axios.get('/contacts');
      return data.data;
    } catch (error) {
      alert(error); 
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
