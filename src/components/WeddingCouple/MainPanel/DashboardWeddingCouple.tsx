import { Card } from "@material-ui/core";
import RGL, { Responsive, WidthProvider } from "react-grid-layout";
import { styled } from '@mui/material/styles';
import PanelThemeBg from "assets/img/rusticTheme.jpg";
import TimerWidget from "components/Widgets/TimerWidget";
import ReminderWidget from "components/Widgets/ReminderWidget";
import NotificationWidget from "components/Widgets/NotificationWidget";
import ProgressWidget from "components/Widgets/ProgressWidget";
import PhotoWidget from "components/Widgets/PhotoWidget";
import { Box } from "@mui/system";
import { useAppSelector } from "store/hooks";
import { LayoutArray, selectLayout  } from "store/layoutSlice";

const Widget = styled(Card)(({ theme }) => ({
  background: '#FFFFFF',
  boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
}));

interface LayoutProps {
  className: string
  cols: number
  rowHeight: number
  margin?: [number, number]
  width?: number
  //onLayoutChange?(layout: LayoutArray[]): void;
}

const Props: LayoutProps = {
  className: "layout",
  cols: 12,
  rowHeight: 280,
  width: 1400,
  margin: [30, 30],
  //onLayoutChange: ()=>{},
}


const DashboardWeddingCouple = () => {
  const actualLayout = useAppSelector(selectLayout);
  const WidgetGridLayout = WidthProvider(RGL);

  const weddingThemeStyle={
    backgroundImage: `url(${PanelThemeBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: "2rem",
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