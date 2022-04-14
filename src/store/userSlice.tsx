import { createSlice } from '@reduxjs/toolkit';

type Users = {
    name:string,
    lastName:string,
    email: string,
    password: string
}
let users: Users[]=[]

const initialState = {
   users
  };
  
  const slice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    
        addNewUser: (state, action) => {
            console.log(initialState)
            console.log(action.payload)
          state.users.push(action.payload);
          console.log(state.users)
         }
    
    },
  });
  
  export const { addNewUser } = slice.actions;
  
  export default slice.reducer;
