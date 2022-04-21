import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface User {
  loggedIn: boolean,
  status: string,
  user: any,
}

const initialState : User = {
    loggedIn: false,
    status: 'idle',
    user: undefined,
  };
  
  const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
         login: (state,action) =>{
           state.user= action.payload.user
           state.loggedIn = true;
           state.status = 'login';

         },
         logout: (state)=> {
           state.user=undefined
           state.status = 'logout';
           state.loggedIn=false;
         }
    
    },
  });
  
  export const {  login, logout } = loginSlice.actions;
  
  export const selectUser= (state: RootState) => state.login.user;
  export const loggedInUser= (state:RootState)=> state.login.loggedIn;
  export default loginSlice.reducer;