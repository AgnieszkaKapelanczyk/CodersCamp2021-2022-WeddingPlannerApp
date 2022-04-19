import { Card } from "@material-ui/core";
import { Responsive, WidthProvider } from "react-grid-layout";
import { styled } from '@mui/material/styles';
import PanelThemeBg from "../../../assets/img/rusticTheme.jpg";
import TimerWidget from "../../Widgets/TimerWidget";
import ReminderWidget from "../../Widgets/ReminderWidget";
import NotificationWidget from "../../Widgets/NotificationWidget";
import ProgressWidget from "../../Widgets/ProgressWidget";
import PhotoWidget from "../../Widgets/PhotoWidget";
import { Box } from "@mui/system";
import { useAppSelector } from "../../../store/hooks";
import { Layout, Layouts, selectLayout  } from "../../../store/layoutSlice";

const Widget = styled(Card)(({ theme }) => ({
  background: '#FFFFFF',
  boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
}));

type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';


type ItemCallback = (
  layout: Layout[],
  oldItem: Layout,
  newItem: Layout,
  placeholder: Layout,
  event: MouseEvent,
  element: HTMLElement,
) => void;

type DragOverEvent = MouseEvent & {
  nativeEvent: {
      layerX: number,
      layerY: number,
  } & Event
};

interface LayoutProps {
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  width?: number | undefined;
  autoSize?: boolean | undefined;
  draggableCancel?: string | undefined;
  draggableHandle?: string | undefined;
  compactType?: 'vertical' | 'horizontal' | null | undefined;
  rowHeight?: number | undefined;
  droppingItem?: {
      i: string;
      w: number;
      h: number;
  } | undefined;
  verticalCompact?: boolean | undefined;
  maxRows?: number | undefined;
  isDraggable?: boolean | undefined;
  isResizable?: boolean | undefined;
  isBounded?: boolean | undefined;
  useCSSTransforms?: boolean | undefined;
  transformScale?: number | undefined;
  allowOverlap?: boolean | undefined;
  preventCollision?: boolean | undefined;
  isDroppable?: boolean | undefined;
  resizeHandles?: ResizeHandle[] | undefined;
  resizeHandle?: React.ReactNode | ((resizeHandle: ResizeHandle) => React.ReactNode) | undefined;
  onDragStart?: ItemCallback | undefined;
  onDrag?: ItemCallback | undefined;
  onDragStop?: ItemCallback | undefined;
  onResizeStart?: ItemCallback | undefined;
  onResize?: ItemCallback | undefined;
  onResizeStop?: ItemCallback | undefined;
  onDrop?(layout: Layout[], item: Layout, e: Event): void;
  onDropDragOver?(e: DragOverEvent): { w?: number, h?: number } | false | undefined;
  innerRef?: React.Ref<HTMLDivElement>;
  layout?: Layout[] | undefined;
  margin?: [number, number] | undefined;
  children?: React.ReactNode;
  containerPadding?: [number, number] | undefined;
  onLayoutChange?(layout: Layout[]): void;
  cols?: { [P: string]: number } | undefined;
  breakpoint?: string | undefined;
  breakpoints?: { [P: string]: number } | undefined;
}

const Props: LayoutProps = {
  breakpoints: { "lg": 1200, "md": 996, "sm": 768, "xs": 480, "xxs": 0 },
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  className: "layout",
  rowHeight: 260,
  maxRows: 30,
  width: 1000,
  margin: [30, 30],
  isResizable: true,
  autoSize: true,
  resizeHandles: ['se'],
  isBounded: true,
  verticalCompact: true,
  onLayoutChange: function() {},
  isDraggable: true,
  //onLayoutChange={handleLayoutChange}
  
}

const DashboardWeddingCouple = () => {
  const actualLayout = useAppSelector(selectLayout);
  const ResponsiveGridLayout = WidthProvider(Responsive);

  const  layoutMD =  [
    { i: "TimerWidget", x: 0, y: 0, w: 6, h: 1, minH: 1, minW: 5 },
    { i: "ReminderWidget", x: 6, y: 1, w: 6, h: 1 },
    { i: "NotificationWidget", x: 0, y: 1, w: 5, h: 1.5 },
    { i: "ProgressWidget", x: 5, y: 4, w: 5, h: 1 },
    { i: "PhotosWidget", x: 5, y: 4, w: 4, h: 1 }
  ];

  const weddingThemeStyle={
    backgroundImage: `url(${PanelThemeBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
  };
  
  //const handleLayoutChange = (actualLayout, layouts) => {
  //  localStorage.setItem("grid-layout", JSON.stringify(layouts));
  //};

  type ResponsiveLayout = Layouts | undefined;



  return (
    <Box style={weddingThemeStyle}>
        <ResponsiveGridLayout layouts={{
          lg: actualLayout[0].lg, 
          md: actualLayout[1].md,
          sm: actualLayout[2].sm,
          xs: actualLayout[3].xs,
          xxs: actualLayout[4].xxs
          }} 
          {...Props}
          >
        <Widget key='TimerWidget'>
            <TimerWidget/>
        </Widget>
        <Widget key='NotificationWidget'>
            <NotificationWidget/>
        </Widget>
        <Widget key='ReminderWidget'>
              <ReminderWidget/>
        </Widget>
        <Widget key='ProgressWidget'>
            <ProgressWidget/>
        </Widget>
        <Widget key='PhotosWidget'>
            <PhotoWidget/>
        </Widget> 
      </ResponsiveGridLayout>
    </Box>
  )
}

export default DashboardWeddingCouple;