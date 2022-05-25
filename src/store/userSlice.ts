import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { toast } from 'react-toastify';
import AuthClient from 'services/clients/AuthClient';
import { RegistrationData } from 'components/Dialog/rejestracjEmail';
import { LoginData } from 'components/Dialog/loginDialog';

export const fetchLoginData = createAsyncThunk('user/fetchLoginData ', async (data: LoginData, { rejectWithValue }) => {
  const response = await AuthClient.loginUser(data)
  .then((response) => {
    const token = response.headers["auth-token"];
    localStorage.setItem("auth-token", token); 
    return response;
  })
  .catch((error) => {
    return rejectWithValue(error);
  });
  
  return response; 
});

export const fetchRegistrationData = createAsyncThunk('user/fetchRegistrationData ', async (data: RegistrationData, { rejectWithValue }) => {
  const response = await AuthClient.registerUser(data).then((response) => {
    return response;
  })
  .catch((error) => {
    return rejectWithValue(error);
  });
  return response; 
}); 

type User = {
  loggedIn: boolean,
  status: string,
  error: null | string | undefined
  user: string | undefined
};

function isLogged(state: string | undefined): state is string {
  return(
    (state as string) !== undefined 
  ) 
};

const userNotLogged: User = {
  loggedIn: false,
  status: 'idle',
  error: null,
  user: undefined,
};

const getInitialState = () => {
  let initialUser: User | undefined= userNotLogged;
  let userFromSS: string | undefined = sessionStorage.getItem("user")
  ? sessionStorage.getItem("user") || '' : undefined;

  if (isLogged(userFromSS)) {
    initialUser = {
      loggedIn: true,
      status: 'idle',
      error: null,
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
      },
      logout: (state) => {
        state.loggedIn = false;
        state.user = undefined;
        toast.success("Wylogowano!");
        sessionStorage.clear();
      }
    },
     extraReducers(builder) {
      builder
        .addCase(fetchLoginData.pending, (state, action) => {
          state.status = 'loading...';
          state.error = null;
        })
        .addCase(fetchLoginData.fulfilled, (state, action) => {
          if (action.payload.status === 201) {
            state.status = 'succeeded log in (:';
            toast.success("Jesteś zalogowany");
          }        
          if (isLogged(state.user)) {
            sessionStorage.setItem("user", state.user);
          }
        })
        .addCase(fetchLoginData.rejected, (state, action) => {
          state.status = 'failed :('
          state.error = action.error.message;
          toast.error("Logowanie nie powiodło się")
        })
        .addCase(fetchRegistrationData.pending, (state, action) => {
          state.status = 'loading...';
        })
        .addCase(fetchRegistrationData.fulfilled, (state, action) => {
          if (action.payload.status === 201) {
            state.status = 'succeeded register (:';
            toast.success("Zarejestrowałeś się!");
          }        
        })
        .addCase(fetchRegistrationData.rejected, (state, action) => {
          state.status = 'failed register :('
          state.error = action.error.message;
          toast.error("Rejestracja nie powiodło się");
        })
    } 
  });
  
  export const { login, logout } = userSlice.actions;

  export const selectName = (state: RootState) => state.user.user;

  export const isLoggedIn = (state: RootState) => state.user.loggedIn;

  export const selectResponseStatus = (state: RootState) => state.user.status;

  export const selectResponseError = (state: RootState) =>  state.user.error;

  export const selectLoggedInUser = (state: RootState) =>  state.user.user;
  
  export default userSlice.reducer;

  