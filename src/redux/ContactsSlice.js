import { createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from './contacts/contactsOpetations'

const contactState = {
  items: [],
  isLoading: false,
  error: null
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactState,
  extraReducers: {
    [fetchContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContact.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    [addContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.items.push({...action.payload});
      state.isLoading = false;
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [deleteContact.pending]: (state, _) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.isLoading = false;
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
})
export const contactsReducer = contactSlice.reducer;
