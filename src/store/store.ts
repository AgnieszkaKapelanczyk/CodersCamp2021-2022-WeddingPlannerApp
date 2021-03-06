import { configureStore} from '@reduxjs/toolkit';
import dialogReducer from 'store/dialogSlice';
import layoutReducer from 'store/layoutSlice';
import dateOfWeddingReducer from 'store/dateOfWeddingSlice';
import timeOfWeddingReducer from 'store/timeOfWeddingSlice';
import userReducer from 'store/userSlice';
import eventInCalendarReducer from 'store/eventInCalendarSlice';
import toolboxReducer from 'store/toolboxSlice';
import toolboxThemeReducer from 'store/themeToolboxSlice';
import themeReducer from 'store/themeSlice';
import progressReducer from 'store/progressSlice';
import locationReducer from 'store/locationSlice';
import groomClothesReducer from  'store/clothesGroomSlice';
import brideClothesReducer from 'store/clothesBrideSlice';
import typeOfWeddingReducer from 'store/typeOfWeddingSlice';

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    layout: layoutReducer,
    dateOfWedding: dateOfWeddingReducer,
    timeOfWedding: timeOfWeddingReducer,
    user: userReducer,
    eventInCalendar: eventInCalendarReducer,
    toolbox: toolboxReducer,
    toolboxTheme: toolboxThemeReducer,
    theme: themeReducer,
    progress: progressReducer,
    location: locationReducer,
    brideClothes: brideClothesReducer,
    groomClothes: groomClothesReducer,
    typeOfWedding: typeOfWeddingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;