import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState: string[]= [];

const pickTimeSlice = createSlice({
    name: 'timeOfWedding',
    initialState,
    reducers:{
        pickTime:(state,action) =>{
            return action.payload
        }

    }
})
export const pickTime = pickTimeSlice.actions;
export default pickTimeSlice.reducer;
export const pickTimeOfWedding = ((state: RootState)=>state.timeOfWedding);