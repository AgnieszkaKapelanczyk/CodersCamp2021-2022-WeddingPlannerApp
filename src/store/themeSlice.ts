import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export type themeFeature = 'Rustic' | 'Classic' | 'Movie';

interface ThemeState {
    themeName: themeFeature;
};

const initialState: ThemeState = {
    themeName: 'Rustic'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        updateTheme: (state, action) => {
            state.themeName = action.payload.themeName;
        },
    }
  });
  
  export const { updateTheme } = themeSlice.actions;
  
  export default themeSlice.reducer;

  export const selectActualTheme= (state: RootState)=> state.theme.themeName;

  