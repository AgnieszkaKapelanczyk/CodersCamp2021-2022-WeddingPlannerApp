import { configureStore} from '@reduxjs/toolkit';
import dialogReducer from '../store/dialogSlice';
import layoutReducer from '../store/layoutSlice';
import dateOfWeddingReducer from './dateOfWeddingSlice';

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    layout: layoutReducer,
    dateOfWedding: dateOfWeddingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;