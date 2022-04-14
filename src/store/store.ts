import { configureStore } from '@reduxjs/toolkit'
import dialogReducer from './dialogSlice'
import {pickDateSlice} from './dateOfWeddingSlice'

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    dateOfWedding: pickDateSlice.reducer
  },
})