import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export interface listItemCloth {
  title: string,
  checked: boolean
};

const initialState : listItemCloth[] = [];

const clothesGroomSlice = createSlice({
    name: 'groomClothes',
    initialState,
    reducers: {
      addCloth : (state, action) => {
        state.push(action.payload);
      },
      removeCloth: (state, action) => {
        state.splice(action.payload, 1);
      },
      updateClothes: (state, action) => {
        state.splice(0);
        state.push(...action.payload);
      },
    },
  });
  
  export const { addCloth, removeCloth, updateClothes } = clothesGroomSlice.actions;
  
  export default clothesGroomSlice.reducer;

  export const selectListOfClothes = ((state: RootState)=>state.groomClothes);

  