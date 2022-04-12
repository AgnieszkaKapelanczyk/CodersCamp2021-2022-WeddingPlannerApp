import { createSlice } from '@reduxjs/toolkit';


interface formType{
  rejestracja: string,
  zalozonyProfil:string,
  loginDialog: string,
  rejestracjaEmail:string,
  zalogowano:string
}

export const FormType: formType = Object.freeze({
  rejestracja: 'rejestracja',
  zalozonyProfil: 'zalozonyProfil',
  loginDialog: 'loginDialog',
  rejestracjaEmail: 'rejestracjaEmail',
  zalogowano: 'zalogowano',
});

const initialState = {
  isOpen: false,
  formType: undefined,
};

const slice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action) => {
      return { ...action.payload, isOpen: true };
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.formType = undefined;
    },
  },
});

export const { openDialog, closeDialog } = slice.actions;

export default slice.reducer;
