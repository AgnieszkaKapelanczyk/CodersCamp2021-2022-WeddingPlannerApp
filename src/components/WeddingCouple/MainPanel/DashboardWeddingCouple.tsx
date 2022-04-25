import { Card } from "@material-ui/core";
import { Responsive, WidthProvider } from "react-grid-layout";
import { styled } from '@mui/material/styles';
import PanelThemeBg from "assets/img/rusticTheme.jpg";
import TimerWidget from "components/Widgets/TimerWidget";
import ReminderWidget from "components/Widgets/ReminderWidget";
import NotificationWidget from "components/Widgets/NotificationWidget";
import ProgressWidget from "components/Widgets/ProgressWidget";
import PhotoWidget from "components/Widgets/PhotoWidget";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { Layout, Layouts, selectLayout, setNewLayout  } from "store/layoutSlice";
import { useState, useEffect } from "react";
import { LG_BREAKPOINT_WIDTH, MD_BREAKPOINT_WIDTH, SM_BREAKPOINT_WIDTH, XS_BREAKPOINT_WIDTH, XXS_BREAKPOINT_WIDTH } from "common/Breakpoints/constans";
import { Breakpoint, getDeviceConfig } from "common/Breakpoints/getDeviceConfig";
import AddIcon from '@mui/icons-material/Add';
import { Box, IconButton } from "@mui/material";
import { theme } from "theme/theme";
import { openToolbox } from "store/ToolboxSlice";
import EditIcon from '@mui/icons-material/Edit';
import ToolboxMenu from "components/Widgets/Toolbox/ToolboxMenu";

const Widget = styled(Card)(({ theme }) => ({
  background: '#FFFFFF',
  boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
  cursor: 'move'
}));

const StyledIconButton = styled(IconButton)(({theme}) => ({
  transition: 'transform .2s',
  '&:hover': {
    transform: 'scale(1.1)', 
  }
}));

type ResizeHandle = 's' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne';

interface LayoutProps {
  className?: string | undefined;
  style?: React.CSSProperties | undefined;
  width?: number | undefined;
  autoSize?: boolean | undefined;
  draggableCancel?: string | undefined;
  draggableHandle?: string | undefined;
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
  isDroppable?: boolean | undefined;
  resizeHandles?: ResizeHandle[] | undefined;
  resizeHandle?: React.ReactNode | ((resizeHandle: ResizeHandle) => React.ReactNode) | undefined;
  layout?: Layout[] | undefined;
  margin?: [number, number] | undefined;
  children?: React.ReactNode;
  cols?: { [P: string]: number } | undefined;
  breakpoint?: string | undefined;
  breakpoints?: { [P: string]: number } | undefined;
  onLayoutChange: (currentLayout: Layout[], layouts: Layouts)=> void;
  measureBeforeMount?: boolean | undefined;
};

const DashboardWeddingCouple = () => {
  const dispatch = useAppDispatch();
  const actualLayout: Layouts | undefined | [] = useAppSelector(selectLayout);
  const ResponsiveGridLayout = WidthProvider(Responsive);
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint | undefined>(undefined);
  const [layouts, setLayouts] = useState<Layouts | undefined>(undefined);

  function isLayouts(actualLayout: Layouts | undefined | []): actualLayout is Layouts {
    return(
      (actualLayout as Layouts) !== undefined && (actualLayout as Layouts) !== null
    ) 
  };

  const Props: LayoutProps = {
    breakpoints: { 
      "lg": LG_BREAKPOINT_WIDTH, 
      "md": MD_BREAKPOINT_WIDTH, 
      "sm": SM_BREAKPOINT_WIDTH, 
      "xs": XS_BREAKPOINT_WIDTH, 
      "xxs": XXS_BREAKPOINT_WIDTH
    },
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    className: "layout",
    rowHeight: 287,
    maxRows: 30,
    margin: [30, 30],
    isResizable: true,
    autoSize: true,
    resizeHandles: ['se'],
    isBounded: true,
    verticalCompact: true,
    isDraggable: true,
    onLayoutChange: ()=>{},
    useCSSTransforms: false
  };

  const handleModify = (layout: Layout[], layouts: Layouts) => {
    let tempArray= layouts;
    const newBreakpoint= getDeviceConfig(window.innerWidth);

     switch (newBreakpoint) {
      case "lg":
        tempArray.lg = layout;
        break;
      case "md":
        tempArray.md = layout;
        break;  
      case "sm":
        tempArray.sm= layout;
        break;  
      case "xs":
        tempArray.xs = layout;
        break;  
      case "xxs":
        tempArray.xxs = layout;
        break;
     };
     
     dispatch(setNewLayout({newLayout: tempArray}));
  };

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newBreakpoint= getDeviceConfig(window.innerWidth);
        setCurrentBreakpoint(newBreakpoint);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
    
  }, [currentBreakpoint]);

  useEffect(()=> {
    if(isLayouts(actualLayout)){
      setLayouts(actualLayout);
    }
  },[actualLayout]);


  return (
    <Box>
      <ToolboxMenu/>
        <Box display={'flex'} flexDirection={'column'} style={{ position: 'fixed', top: '80px', right: '10px', zIndex: 2 }}>
            <StyledIconButton 
              aria-label="change theme" 
              style={{color: `${theme.palette.primary.main}` }}
              //onClick={() => dispatch()}
              title='Edytuj motyw' >
              <EditIcon style= {{fontSize: '1.7rem', borderRadius: '50%', background: '#fff', padding:'0.6rem'}}/>
            </StyledIconButton>
            <StyledIconButton 
              aria-label="add a widget" 
              style={{color: `${theme.palette.primary.main}` }}
              onClick={() => dispatch(openToolbox())}
              title='Dodaj Widget'  >
              <AddIcon style= {{fontSize: '2.7rem', borderRadius: '50%', background: '#fff'}}/>
            </StyledIconButton>
        </Box>
        <ResponsiveGridLayout 
          layouts={layouts} 
          {...Props}
          onLayoutChange={handleModify}
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
};



export default DashboardWeddingCouple;