import { configureStore } from "@reduxjs/toolkit";
import { userReduser } from "./userSlice";
import { authReducer } from "./auth/slice";
import {contactsReducer} from "./contacts/slice"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'auth',
  version: 1,
	storage,
	whitelist: ['token'],
}

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		user: userReduser,
		auth: persistReducer(persistConfig, authReducer),
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)



