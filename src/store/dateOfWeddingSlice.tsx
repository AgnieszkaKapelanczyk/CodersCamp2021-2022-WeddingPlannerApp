import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState: string[]= [];

const pickDateSlice = createSlice({
    name: 'dateOfWedding',
    initialState,
    reducers:{
        pickDate:(state,action) =>{
            return action.payload
        }

    }
})
export const pickDate = pickDateSlice.actions;
export default pickDateSlice.reducer;
export const pickDateOfWedding = ((state: RootState)=>state.dateOfWedding);
