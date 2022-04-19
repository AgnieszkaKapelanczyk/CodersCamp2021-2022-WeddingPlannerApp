import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';
type Breakpoint = 'lg' | "md" | "sm" | "xs" | "xxs";


export interface Layout {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number | undefined;
    maxW?: number | undefined;
    minH?: number | undefined;
    maxH?: number | undefined;
    moved?: boolean | undefined;
    static?: boolean | undefined;
    isDraggable?: boolean | undefined;
    isResizable?: boolean | undefined;
    resizeHandles?: ResizeHandle[] | undefined;
    isBounded?: boolean | undefined;
}

export interface Layouts {
  [P: string]: Layout[];
}

const initialState: Layouts[]  = [
      {
        lg: [
          { i: "TimerWidget", x: 0, y: 0, w: 5, h: 1, minH: 1, minW: 5 },
          { i: "ReminderWidget", x: 5, y: 1, w: 5, h: 1 },
          { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1.5 },
          { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1, minH: 1, minW: 5 },
          { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1 }
        ]
      },
      {
        md: [
          { i: "TimerWidget", x: 0, y: 0, w: 4, h: 1, minH: 1, minW: 4},
          { i: "ReminderWidget", x: 5, y: 1, w: 5, h: 1 },
          { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1.5 },
          { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1, minH: 1, minW: 5 },
          { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1 }
        ]
      },
      {
        sm: [
          { i: "TimerWidget", x: 0, y: 0, w: 3, h: 1, minH: 1, minW: 3 },
          { i: "ReminderWidget", x: 5, y: 1, w: 5, h: 1 },
          { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1.5 },
          { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1, minH: 1, minW: 5 },
          { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1 }
        ]
      },
      {
        xs: [
          { i: "TimerWidget", x: 0, y: 0, w: 2, h: 1, minH: 1, minW: 2},
          { i: "ReminderWidget", x: 5, y: 1, w: 5, h: 1 },
          { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1.5 },
          { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1, minH: 1, minW: 5 },
          { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1 }
        ]
      },
      {
        xxs: [
          { i: "TimerWidget", x: 0, y: 0, w: 2, h: 1, minH: 1, minW: 2 },
          { i: "ReminderWidget", x: 5, y: 1, w: 5, h: 1 },
          { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1.5 },
          { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1, minH: 1, minW: 5 },
          { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1 }
        ]
      }
];

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
      setLayout: (state, action) => {
        return state;
      },
      addWidget: (state, action) => {
        //state.layout.push(action.payload)
      },
      removeWidget: (state, action) => {
        //state.layout.splice(action.payload, 1)
      }
    },
  });
  
  export const { setLayout, addWidget, removeWidget } = layoutSlice.actions;
  
  export default layoutSlice.reducer;

  export const selectLayout = ((state: RootState)=>state.layout);

  