import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export interface listItemBrideCloth {
  title: string,
  checked: boolean
};

const initialState : listItemBrideCloth[] = [];

const brideClothesSlice = createSlice({
    name: 'brideClothes',
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
  
  export const { addCloth, removeCloth, updateClothes } = brideClothesSlice.actions;
  
  export default brideClothesSlice.reducer;

  export const selectListOfClothes = ((state: RootState)=>state.brideClothes);

  