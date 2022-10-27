import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducers = combineReducers({

})


export const store = configureStore({
  reducer: rootReducers
})
// export type RootState = ReturnType<typeof store.getState>;

// type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();


export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch