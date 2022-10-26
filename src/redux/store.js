import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from "./ContactsSlice";
import { filtersReducer } from "./FilterSlice";



const persistConfig = {
  key: 'root',
  storage,
}



const contactsPersistReducer = persistReducer(persistConfig, contactsReducer);
const filtersPersistReducer = persistReducer(persistConfig, filtersReducer);

const store = configureStore({
  reducer: {
    contacts: contactsPersistReducer,
    filters: filtersPersistReducer
  }, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

let persistor = persistStore(store)

export { store, persistor };
