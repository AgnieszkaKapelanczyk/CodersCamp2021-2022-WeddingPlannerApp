import { createSlice, nanoid } from '@reduxjs/toolkit';
import { RootState } from './store';


const createEvent = (title:string) =>({
    id: nanoid(),
    title,
    completed: false,
    assignedTo:''
})

const initialState= [
    createEvent('Pierwsza przymiarka sukni ślubnej'),
    createEvent('Wybór menu'),
    createEvent('Spotkanie z florystką')
];

const eventInCalendarSlice = createSlice({
    name: 'eventInCalendar',
    initialState,
    reducers:{
        addEvent:(state,action) =>{
            const event = createEvent(action.payload)
            state.push(event)
    }
},
})

export const addEvent = eventInCalendarSlice.actions;
export default eventInCalendarSlice.reducer;
export const eventInCalendar = ((state: RootState)=>state.eventInCalendar);