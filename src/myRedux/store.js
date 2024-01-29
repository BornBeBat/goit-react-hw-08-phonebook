import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsSlise } from './contacts/contacts-slise';
import { filterSlise } from './filter/filter-slise';
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
