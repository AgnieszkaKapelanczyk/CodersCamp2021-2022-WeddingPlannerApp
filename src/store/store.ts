import { configureStore} from '@reduxjs/toolkit';
import dialogReducer from '../store/dialogSlice';
import layoutReducer from '../store/layoutSlice';
import dateOfWeddingReducer from './dateOfWeddingSlice';
import timeOfWeddingReducer from './timeOfWeddingSlice';
import usersReducer from '../store/userSlice'

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    layout: layoutReducer,
    dateOfWedding: dateOfWeddingReducer,
    timeOfWedding: timeOfWeddingReducer,
    users:usersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;