import { createSlice, current } from '@reduxjs/toolkit';

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
          state.users.push(action.payload);
          console.log(current(state));
         }
    
    },
  });
  
  export const { addNewUser } = slice.actions;
  
  export default slice.reducer;