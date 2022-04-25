import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { toast } from 'react-toastify';

type User = {
  loggedIn: boolean,
  user: string | undefined
};

function isLogged(state: string | undefined): state is string {
  return(
    (state as string) !== undefined 
  ) 
};

const userNotLogged: User = {
  loggedIn: false,
  user: undefined
};

const getInitialState = () => {
  let initialUser: User | undefined= userNotLogged;
  let userFromSS: string | undefined = sessionStorage.getItem("user")
  ? sessionStorage.getItem("user") || '' : undefined;

  if (isLogged(userFromSS)) {
    initialUser = {
      loggedIn: true,
      user:  userFromSS
    }
  };
  return initialUser;
};

const initialState: User | ''  = getInitialState();

  
  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state, action) => {
        state.loggedIn = true;
        state.user = action.payload.user;
        toast.success("Jesteś zalogowany");
        if (isLogged(state.user)) {
          sessionStorage.setItem("user", state.user);
        }
      },
      logout: (state) => {
        state.loggedIn = false;
        state.user = undefined;
        toast.success("Wylogowano!");
        sessionStorage.clear();
      }
    }
  });
  
  export const { login, logout } = userSlice.actions;

  export const selectName = (state: RootState) => state.user.user;

  export const isLoggedIn = (state: RootState) => state.user.loggedIn;
  
  export default userSlice.reducer;
  