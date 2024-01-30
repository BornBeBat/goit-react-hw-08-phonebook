import { configureStore, combineReducers } from '@reduxjs/toolkit';
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

import { contactsSlise } from './contacts';
import { filterSlise } from './filter';
import { authSlise } from './auth';

const persistAuthConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReduser = combineReducers({
  contacts: contactsSlise.reducer,
  filter: filterSlise.reducer,
  auth: persistReducer(persistAuthConfig, authSlise.reducer),
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
