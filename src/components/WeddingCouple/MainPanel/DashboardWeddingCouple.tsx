import { Card } from "@material-ui/core";
import GridLayout from "react-grid-layout";
import { styled } from '@mui/material/styles';
import PanelThemeBg from "assets/img/rusticTheme.jpg";
import TimerWidget from "components/Widgets/TimerWidget";
import ReminderWidget from "components/Widgets/ReminderWidget";
import NotificationWidget from "components/Widgets/NotificationWidget";
import ProgressWidget from "components/Widgets/ProgressWidget";
import PhotoWidget from "components/Widgets/PhotoWidget";
import { Box } from "@mui/system";

const Widget = styled(Card)(({ theme }) => ({
  background: '#FFFFFF',
  boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
}));

const DashboardWeddingCouple = () => {

  const weddingThemeStyle={
    backgroundImage: `url(${PanelThemeBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: "2rem",
    height: '100%',
};

  const layout = [
    { i: "TimerWidget", x: 0, y: 0, w: 4, h: 1 },
    { i: "ReminderWidget", x: 4, y: 1, w: 5, h: 1 },
    { i: "NotificationWidget", x: 0, y: 1, w:4, h: 2 },
    { i: "ProgressWidget", x: 3, y: 4, w: 4, h: 1 },
    { i: "PhotosWidget", x: 4, y: 1, w: 2, h: 1 }
  ];
  
  return (
    <Box style={weddingThemeStyle}>
        <GridLayout layout={layout} cols={12} rowHeight={280} width={1400} margin={[30, 30]} >
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
      </GridLayout>
    </Box>
  )
}

export default DashboardWeddingCouple;