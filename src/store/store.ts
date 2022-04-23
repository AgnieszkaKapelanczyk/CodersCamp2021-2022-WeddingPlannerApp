import { configureStore} from '@reduxjs/toolkit';
import dialogReducer from 'store/dialogSlice';
import layoutReducer from 'store/layoutSlice';
import dateOfWeddingReducer from 'store/dateOfWeddingSlice';
import timeOfWeddingReducer from 'store/timeOfWeddingSlice';
import usersReducer from 'store/userSlice';
import eventInCalendarReducer from 'store/eventInCalendarSlice';
import toolboxReducer from 'store/ToolboxSlice';
import loginReducer from 'store/loginSlice';


export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    layout: layoutReducer,
    dateOfWedding: dateOfWeddingReducer,
    timeOfWedding: timeOfWeddingReducer,
    users: usersReducer,
    eventInCalendar: eventInCalendarReducer,
    toolbox: toolboxReducer,
    login: loginReducer,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;