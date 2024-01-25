import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsSlise } from './contactsSlise';
import { filterSlise } from './filterSlise';
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

const rootReduser = combineReducers({
  contacts: contactsSlise.reducer,
  filter: filterSlise.reducer,
});

// const persistedReduser = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: rootReduser,
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
