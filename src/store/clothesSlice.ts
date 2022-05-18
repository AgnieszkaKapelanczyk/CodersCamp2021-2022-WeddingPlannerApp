import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

const initialState : string[] = [];
 
const clothesSlice = createSlice({
    name: 'clothes',
    initialState,
    reducers: {
      addCloth : (state, action) => {
        state.push(action.payload);
      },
      removeCloth: (state, action) => {
        state.splice(action.payload, 1);
      },
      updateClothes: (state, action) => {
        state = action.payload.updatedList;
      }
    },
  });
  
  export const { addCloth, removeCloth, updateClothes } = clothesSlice.actions;
  
  export default clothesSlice.reducer;

  export const selectListOfClothes = ((state: RootState)=>state.clothes);

  