import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export interface listItemCloth {
  title: string,
  checked: boolean
};

const initialState : listItemCloth[] = [];

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
        state.splice(0,1,action.payload)
      },
      resetClothList: (state, action) => {
        state.splice(0);
      },
    },
  });
  
  export const { addCloth, removeCloth, updateClothes } = clothesSlice.actions;
  
  export default clothesSlice.reducer;

  export const selectListOfClothes = ((state: RootState)=>state.clothes);

  