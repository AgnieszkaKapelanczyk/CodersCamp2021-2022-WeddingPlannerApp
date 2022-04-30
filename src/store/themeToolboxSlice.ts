import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ToolboxState {
    isOpen :boolean;
}

const initialState: ToolboxState = {
    isOpen: false,
};

const themeToolboxSlice = createSlice({
    name: 'toolboxTheme',
    initialState,
    reducers: {
        openToolboxTheme: (state) => {
            state.isOpen = true;
        },
        closeToolboxTheme: (state) => {
            state.isOpen = false;
         },
    }
  });
  
  export const { openToolboxTheme, closeToolboxTheme } = themeToolboxSlice.actions;
  
  export default themeToolboxSlice.reducer;

  export const selectToolboxThemeState = (state: RootState)=> state.toolboxTheme.isOpen;

  