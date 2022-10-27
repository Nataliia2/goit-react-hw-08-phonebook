import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: (state, {payload}) => state.filter (({id}) =>
    id !== payload)
  }
});



export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
