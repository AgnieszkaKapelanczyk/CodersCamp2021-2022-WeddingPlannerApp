import { Layouts } from 'store/layoutSlice';

export const defaultLayout: Layouts  = 
      {
        lg: [
          { i: "TimerWidget", x: 0, y: 0, w: 4, h: 1, minH: 1, minW: 4, isDraggable: true, isResizable: true},
          { i: "ReminderWidget", x: 5, y: 1, w: 3, h: 1, isDraggable: true, isResizable: true },
          { i: "NotificationWidget", x: 0, y: 1, w: 3, h: 1, isDraggable: true, isResizable: true},
          { i: "ProgressWidget", x: 5, y: 4, w: 3, h: 1, isDraggable: true, isResizable: true},
          { i: "PhotosWidget", x: 5, y: 4, w: 3, h: 1, isDraggable: true, isResizable: true }
        ],
      
        md: [
          { i: "TimerWidget", x: 0, y: 0, w: 10, h: 1, minH: 1, minW: 5, isDraggable: true, isResizable: true},
          { i: "ReminderWidget", x: 0, y: 1, w: 3, h: 1, isDraggable: true, isResizable: true },
          { i: "NotificationWidget", x: 0, y: 2, w: 2, h: 1, isDraggable: true, isResizable: true },
          { i: "ProgressWidget", x: 0, y: 3, w: 5, h: 1, isDraggable: true, isResizable: true},
          { i: "PhotosWidget", x: 0, y: 4, w: 4, h: 1, isDraggable: true, isResizable: true }
        ],
      
        sm: [
          { i: "TimerWidget", x: 0, y: 0, w: 6, h: 1, minH: 1, minW: 6, isDraggable: true, isResizable: true },
          { i: "ReminderWidget", x: 5, y: 1, w: 5, h: 1, isDraggable: true, isResizable: true },
          { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1, isDraggable: true, isResizable: true },
          { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1, isDraggable: true, isResizable: true },
          { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1, isDraggable: true, isResizable: true }
        ],
      
        xs: [
          { i: "TimerWidget", x: 0, y: 0, w: 4, h: 1, minH: 1, minW: 4, isDraggable: true, isResizable: true},
          { i: "ReminderWidget", x: 0, y: 1, w: 4, h: 1, isDraggable: true, isResizable: true },
          { i: "NotificationWidget", x: 0, y: 2, w: 4, h: 1, isDraggable: true, isResizable: true },
          { i: "ProgressWidget", x: 0, y: 3, w: 4, h: 1, isDraggable: true, isResizable: true},
          { i: "PhotosWidget", x: 0, y: 4, w: 4, h: 1, isDraggable: true, isResizable: true }
        ],
      
        xxs: [
          { i: "TimerWidget", x: 0, y: 0, w: 2, h: 1, minH: 1, minW: 2, isDraggable: true, isResizable: true },
          { i: "ReminderWidget", x: 5, y: 1, w: 5, h: 1, isDraggable: true, isResizable: true },
          { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1, isDraggable: true, isResizable: true },
          { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1, isDraggable: true, isResizable: true },
          { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1, isDraggable: true, isResizable: true }
        ]
      };