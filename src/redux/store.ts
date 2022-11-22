import { configureStore, combineReducers } from '@reduxjs/toolkit';
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
import BasketReducer from './pizza/PizzaSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducers = combineReducers({
  BasketReducer
})


const persistedReducer = persistReducer(persistConfig, rootReducers);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})
// export type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch