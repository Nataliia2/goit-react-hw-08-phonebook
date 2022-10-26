import { createSlice } from "@reduxjs/toolkit";



const filtersSlice = createSlice({
  name: "filters",
  initialState: { filters: ''},
  
  reducers: {
    setContactFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setContactFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
