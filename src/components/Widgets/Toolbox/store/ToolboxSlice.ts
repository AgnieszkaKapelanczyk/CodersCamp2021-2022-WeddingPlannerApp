import { createSlice } from '@reduxjs/toolkit';

interface ToolboxState {
    isOpen :boolean;
}

const initialState: ToolboxState = {
    isOpen: false,
};

const toolboxSlice = createSlice({
    name: 'toolbox',
    initialState,
    reducers: {
        openToolbox: (state) => {
            state.isOpen = true;
        },
        closeToolbox: (state) => {
            state.isOpen = false;
         },
    }
  });
  
  export const { openToolbox, closeToolbox } = toolboxSlice.actions;
  
  export default toolboxSlice.reducer;

  