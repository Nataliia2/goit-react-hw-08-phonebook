import { combineReducers, configureStore } from "@reduxjs/toolkit";
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

const rootReduser = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
}



const contactsPersistReducer = persistReducer(persistConfig, rootReduser);


const store = configureStore({
  reducer:  contactsPersistReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

let persistor = persistStore(store)

export { store, persistor };
