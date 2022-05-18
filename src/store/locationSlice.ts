import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export interface coordinates {
    lat: number,
    long: number
}

interface initial {
    userLocation: coordinates | undefined,
    weddingCeremonyLocation: coordinates | undefined,
    partyLocation: coordinates |undefined
}

const initialState: initial = {
    userLocation: undefined,
    weddingCeremonyLocation: undefined,
    partyLocation: undefined
};
  
const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setUserLocation: (state, action) => {
            state.userLocation = action.payload.userLocation;
            sessionStorage.setItem("userLocation", JSON.stringify(action.payload.userLocation));
        },
    
    },
  });
  
  export const { setUserLocation } = locationSlice.actions;
  
  export default locationSlice.reducer;

  export const selectUserLocation = ((state: RootState)=>state.location.userLocation);

  