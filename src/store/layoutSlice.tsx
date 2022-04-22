import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';

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
    isDroppable?: boolean | undefined;
    isResizable?: boolean | undefined;
    resizeHandles?: ResizeHandle[] | undefined;
    isBounded?: boolean | undefined;
}

//type Breakpoint = 'lg' | "md" | "sm" | "xs" | "xxs";

enum Breakpoint {
  lg = 'lg',
  md = "md",
  sm = "sm",
  xs = "xs",
  xxs = "xxs"
}
export type Layouts = {
  [P: string]: Layout[];
};

const userLayout: Layouts  = 
      {
        lg: [
          { i: "TimerWidget", x: 0, y: 0, w: 5, h: 1, minH: 1, minW: 4, isDraggable: true, isResizable: true},
          { i: "ReminderWidget", x: 5, y: 1, w: 5, h: 1, isDraggable: true, isResizable: true },
          { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1.2, isDraggable: true, isResizable: true},
          { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1, isDraggable: true, isResizable: true},
          { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1, isDraggable: true, isResizable: true }
        ],
      
        md: [
          { i: "TimerWidget", x: 0, y: 0, w: 10, h: 1, minH: 1, minW: 5, isDraggable: true, isResizable: true},
          { i: "ReminderWidget", x: 0, y: 1, w: 3, h: 1, isDraggable: true, isResizable: true },
          { i: "NotificationWidget", x: 0, y: 2, w: 2, h: 1.2, isDraggable: true, isResizable: true },
          { i: "ProgressWidget", x: 0, y: 3, w: 5, h: 1, isDraggable: true, isResizable: true},
          { i: "PhotosWidget", x: 0, y: 4, w: 4, h: 1, isDraggable: true, isResizable: true }
        ],
      
        sm: [
          { i: "TimerWidget", x: 0, y: 0, w: 6, h: 1, minH: 1, minW: 6, isDraggable: true, isResizable: true },
          { i: "ReminderWidget", x: 5, y: 1, w: 5, h: 1, isDraggable: true, isResizable: true },
          { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1.2, isDraggable: true, isResizable: true },
          { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1, isDraggable: true, isResizable: true },
          { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1, isDraggable: true, isResizable: true }
        ],
      
        xs: [
          { i: "TimerWidget", x: 0, y: 0, w: 4, h: 1, minH: 1, minW: 4, isDraggable: true, isResizable: true},
          { i: "ReminderWidget", x: 0, y: 1, w: 4, h: 1, isDraggable: true, isResizable: true },
          { i: "NotificationWidget", x: 0, y: 2, w: 4, h: 1.2, isDraggable: true, isResizable: true },
          { i: "ProgressWidget", x: 0, y: 3, w: 4, h: 1, isDraggable: true, isResizable: true},
          { i: "PhotosWidget", x: 0, y: 4, w: 4, h: 1, isDraggable: true, isResizable: true }
        ],
      
        xxs: [
          { i: "TimerWidget", x: 0, y: 0, w: 2, h: 1, minH: 1, minW: 2, isDraggable: true, isResizable: true },
          { i: "ReminderWidget", x: 5, y: 1, w: 5, h: 1, isDraggable: true, isResizable: true },
          { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1.2, isDraggable: true, isResizable: true },
          { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1, isDraggable: true, isResizable: true },
          { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1, isDraggable: true, isResizable: true }
        ]
      };

const initialState: Layouts | undefined = sessionStorage.getItem("userLayout")
  ? JSON.parse(sessionStorage.getItem("userLayout") || '[]') : userLayout;

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
      setNewLayout: (state, action) => {
        state = action.payload.newLayout;
        sessionStorage.setItem("userLayout", JSON.stringify(action.payload.newLayout));
      },
      addWidget: (state, action) => {
        //state.layout.push(action.payload)
      },
      removeWidget: (state, action) => {
        //state.layout.splice(action.payload, 1)
      }
    },
  });
  
  export const { setNewLayout, addWidget, removeWidget } = layoutSlice.actions;
  
  export default layoutSlice.reducer;

  export const selectLayout = ((state: RootState)=>state.layout);

  