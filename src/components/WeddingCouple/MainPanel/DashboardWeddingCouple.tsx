import { Card } from "@material-ui/core";
import RGL, { WidthProvider } from "react-grid-layout";
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
  cols?: number | undefined;
  layout?: Layout[] | undefined;
  margin?: [number, number] | undefined;
  children?: React.ReactNode;
  containerPadding?: [number, number] | undefined;
  onLayoutChange?(layout: Layout[]): void;
}

const Props: LayoutProps = {
  className: "layout",
  cols: 12,
  rowHeight: 260,
  maxRows: 30,
  width: 1000,
  margin: [30, 30],
  isResizable: true,
  autoSize: true,
  resizeHandles: ['se'],
  //resizeHandle: 
  isBounded: true,
  verticalCompact: true,
  onLayoutChange: function() {},
  isDraggable: true,
  //useCSSTransforms: false,
  
}

const DashboardWeddingCouple = () => {
  const actualLayout = useAppSelector(selectLayout);
  const WidgetGridLayout   = WidthProvider(RGL);

  const weddingThemeStyle={
    backgroundImage: `url(${PanelThemeBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
};
  
  return (
    <Box style={weddingThemeStyle}>
        <WidgetGridLayout layout={actualLayout} {...Props}>
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
      </WidgetGridLayout>
    </Box>
  )
}

export default DashboardWeddingCouple;