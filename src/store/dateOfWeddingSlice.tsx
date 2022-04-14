import { createSlice } from '@reduxjs/toolkit';

const initialState: string = '';

export const pickDateSlice = createSlice({
    name: 'dateOfWedding',
    initialState,
    reducers:{
        pickDate:(state,action) =>{
            return action.payload
        }

    }
})


