import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

interface ItemObject {
    i: string
    x: number
    y: number
    w: number
    h: number
    minW?: number | undefined;
    maxW?: number | undefined;
    minH?: number | undefined;
    maxH?: number | undefined;
    moved?: boolean | undefined;
    isDraggable?: boolean | undefined;
    isResizable?: boolean | undefined;
    isBounded?: boolean | undefined;
};

export interface LayoutArray {
    [P: string]: ItemObject[];
};

const initialState: LayoutArray = {
    layout: [
      { i: "TimerWidget", x: 0, y: 0, w: 5, h: 1 },
      { i: "ReminderWidget", x: 5, y: 1, w: 5, h: 1 },
      { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1.5 },
      { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1 },
      { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1 }
    ]
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
      setLayout: (state, action) => {
        return state;
      },
      addWidget: (state, action) => {
        state.layout.push(action.payload)
      },
      removeWidget: (state, action) => {
        state.layout.splice(action.payload, 1)
      }
    },
  });
  
  export const { setLayout, addWidget, removeWidget } = layoutSlice.actions;
  
  export default layoutSlice.reducer;

  export const selectLayout = ((state: RootState)=>state.layout.layout);

  