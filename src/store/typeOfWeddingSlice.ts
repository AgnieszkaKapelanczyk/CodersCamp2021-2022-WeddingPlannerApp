import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type weddingType = 'KONKORDATOWY' | 'CYWILNY'
export type weddingPlace= 'W PLENERZE' | 'W KOŚCIELE' | 'W URZĘDZIE'

export interface WeddingPlace{
    type:weddingType | undefined,
    place:weddingPlace | undefined
}

const initialState: WeddingPlace = 
    {
        type:undefined,
        place:undefined,
    }


const typeOfWeddingSlice = createSlice({
    name: 'typeOfWedding',
    initialState,
    reducers:{
       updateTypeOfWedding:(state,action) =>{
           if(action.payload.type)
           {state.type = action.payload.type}
           if(action.payload.place)
           {state.place = action.payload.place}
        }
    }
})
export const updateTypeOfWedding = typeOfWeddingSlice.actions;
export default typeOfWeddingSlice.reducer;
export const chooseTypeOfWedding = ((state: RootState)=>state.typeOfWedding.type);
export const chooseTypeOfPlace = ((state: RootState)=>state.typeOfWedding.place);