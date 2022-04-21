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
  
  const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    
        addNewUser: (state, action) => {
          state.users.push(action.payload);
          console.log(current(state));
         }    
    },
  });
  
  export const { addNewUser} = usersSlice.actions;
  
  export default usersSlice.reducer;
  