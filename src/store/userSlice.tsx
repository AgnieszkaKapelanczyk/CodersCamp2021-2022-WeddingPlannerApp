import { createSlice, current } from '@reduxjs/toolkit';
import { RootState } from './store';

type Users = {
    firstName:string,
    lastName:string,
    email: string,
    password: string
}
let users: Users[]=[]

const initialState = {
   users
  //  {
  //    firstName:'',
  //    lastName:'',
  //    email: '',
  //    password: ''
  //  }
  };
  
  const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    
        addNewUser: (state, action) => {
          state.users.push(action.payload);
          console.log(action.payload)
          console.log(current(state));
          localStorage.setItem('user', action.payload)
          console.log(localStorage)
         }    
    },
  });
  
  export const { addNewUser} = usersSlice.actions;

  export const selectName= (state:RootState)=> state.users;
  
  export default usersSlice.reducer;
  