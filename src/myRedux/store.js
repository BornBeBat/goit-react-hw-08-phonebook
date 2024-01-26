import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsSlise } from './contactsSlise';
import { filterSlise } from './filterSlise';
import { themeSlice } from './themeSlise';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlise } from './auth';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['theme'],
};

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const rootReduser = combineReducers({
  contacts: contactsSlise.reducer,
  filter: filterSlise.reducer,
  theme: themeSlice.reducer,
  auth: persistReducer(persistAuthConfig, authSlise.reducer),
});

const persistedReduser = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: persistedReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
