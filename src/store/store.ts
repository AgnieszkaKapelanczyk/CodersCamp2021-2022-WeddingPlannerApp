import { configureStore} from '@reduxjs/toolkit';
import dialogReducer from 'store/dialogSlice';
import layoutReducer from 'store/layoutSlice';
import dateOfWeddingReducer from './dateOfWeddingSlice';
import timeOfWeddingReducer from './timeOfWeddingSlice';
import usersReducer from 'store/userSlice';
import eventInCalendarReducer from './eventInCalendarSlice';
import toolboxReducer from 'components/Widgets/Toolbox/store/ToolboxSlice';
import loginReducer from './loginSlice';


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