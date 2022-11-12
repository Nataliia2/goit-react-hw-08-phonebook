import { configureStore } from "@reduxjs/toolkit";
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
import { authReducer } from './AuthSlice';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      contacts: contactsReducer,
      filter: filtersReducer,
      
  },
  middleware: getDefaultMiddleware=>  getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }),
});
  
export const persistor = persistStore(store);
