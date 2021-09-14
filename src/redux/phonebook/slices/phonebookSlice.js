import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async contact => {
    const res = await axios.post('/contacts', contact);
    return res.data;
  },
);

export const getContacts = createAsyncThunk(
  'phonebook/getContacts',
  async () => {
    const res = await axios.get('/contacts');
    return res.data;
  },
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async id => {
    await axios.delete(`/contacts/${id}`);
    return id;
  },
);

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    items: [],
    loader: false,
    error: '',
  },
  extraReducers: {
    [addContact.pending]: (state, action) => {
      state.loader = true;
    },
    [addContact.rejected]: (state, action) => {
      state.loader = false;
      state.error = 'error';
    },
    [addContact.fulfilled]: (state, action) => {
      state.loader = false;
      state.error = '';
      state.items = [...state.items, action.payload];
    },

    [getContacts.pending]: (state, action) => {
      state.loader = true;
    },
    [getContacts.rejected]: (state, action) => {
      state.loader = false;
      state.error = 'error';
    },
    [getContacts.fulfilled]: (state, action) => {
      state.loader = false;
      state.error = '';
      state.items = [...action.payload];
    },

    [deleteContact.pending]: (state, action) => {
      state.loader = true;
    },
    [deleteContact.rejected]: (state, action) => {
      state.loader = false;
      state.error = 'error';
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.loader = false;
      state.error = '';
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});

export default phonebookSlice.reducer;
