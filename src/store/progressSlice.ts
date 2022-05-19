import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

interface ProgressList {

};

const initialState: ProgressList = {
    
};
  
const progressSlice = createSlice({
    name: 'progress',
    initialState,
    reducers: {
      updateProgress: (state, action) => {
      },
    
    },
  });
  
  export const { updateProgress } = progressSlice.actions;
  
  export default progressSlice.reducer;

  export const selectActualProgress = ((state: RootState)=>state.layout);

  