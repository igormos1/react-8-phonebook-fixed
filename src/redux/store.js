import { configureStore } from "@reduxjs/toolkit";
// import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import { contactApi } from './contactSlice';
import reducer from './reducers';
import { authReducer }  from "./auth";


const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ['token']
};

const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        contacts: reducer,
        auth: persistReducer(authPersistConfig, authReducer),
    }, 
    devTools: process.env.NODE_ENV === "development",
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }}),
        contactApi.middleware,       
        ],
});

setupListeners(store.dispatch);

const persistor = persistStore(store);
// console.log(store);
export { store, persistor };