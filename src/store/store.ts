import { configureStore } from '@reduxjs/toolkit'
import dialogReducer from './dialogSlice'

export const store = configureStore({
  reducer: {
    dialog: dialogReducer
  },
})