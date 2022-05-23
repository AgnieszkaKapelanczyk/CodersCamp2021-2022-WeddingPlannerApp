import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState:{}= {};

const titleOfWedding = {
    title:'KONKORDATOWY',
}

const typeOfWeddingSlice = createSlice({
    name: 'typeOfWedding',
    initialState,
    reducers:{
        chooseType:(state,action) =>{
            return action.payload
        }

    }
})
export const pickDate = typeOfWeddingSlice.actions;
export default typeOfWeddingSlice.reducer;
export const pickDateOfWedding = ((state: RootState)=>state.dateOfWedding);