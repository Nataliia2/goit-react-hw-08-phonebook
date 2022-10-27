import { createSlice } from "@reduxjs/toolkit";



const filtersSlice = createSlice({
  name: "filters",
  initialState: '',
  
  reducers: {
    setContactFilter: ( _, action) =>  action.payload
  },
});

export const { setContactFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
