import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./ContactsSlice";
import { filtersReducer } from "./FilterSlice";

const store = configureStore({
  reducer: {
      contacts: contactsReducer,
      filter: filtersReducer,
  },
});
  
export { store };
