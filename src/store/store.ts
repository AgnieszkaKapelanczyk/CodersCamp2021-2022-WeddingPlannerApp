import { configureStore } from '@reduxjs/toolkit';
import dialogReducer from 'store/dialogSlice';
import layoutReducer from 'store/layoutSlice';

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    layout: layoutReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;