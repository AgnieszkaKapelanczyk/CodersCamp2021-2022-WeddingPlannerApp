import { Card, CardHeader, Divider } from "@material-ui/core";
import GridLayout from "react-grid-layout";
import { styled } from '@mui/material/styles';
import PanelThemeBg from "assets/img/rusticTheme.jpg";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TimerIcon from '@mui/icons-material/Timer';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import { useState } from "react";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { CardContent, Collapse, Typography } from "@mui/material";
import TimerWidgetContent from "components/Widgets/TimerWidgetContent";
import NotificationsIcon from '@mui/icons-material/Notifications';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import ReminderWidgetContent from "components/Widgets/ReminderWidgetContent";
import NotificationWidgetContent from "components/Widgets/NotificationWidgetContent";
import {makeStyles} from '@material-ui/core';
import { theme } from "theme/theme";

const useStyles = makeStyles({
  cardHeaderIcon: {
    color: theme.palette.tertiary.main,
  },
  headerTitle: {
    color: theme.palette.tertiary.main,
  }
});

const Widget = styled(Card)(({ theme }) => ({
  background: '#FFFFFF',
  boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.2)',
  borderRadius: '12px',
}));

const WeddingCouple = () => {

  const weddingThemeStyle={
    backgroundImage: `url(${PanelThemeBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: "2rem",
};

  const layout = [
    { i: "TimerWidget", x: 0, y: 0, w: 4, h: 1 },
    { i: "ReminderWidget", x: 4, y: 1, w: 4, h: 1 },
    { i: "NotificationWidget", x: 0, y: 1, w:4, h: 2 },
    { i: "ProgressWidget", x: 3, y: 4, w: 4, h: 1 },
    { i: "PhotosWidget", x: 4, y: 1, w: 2, h: 1 }
  ];

  const classes = useStyles(theme);
  
  return (
    
     <GridLayout style={weddingThemeStyle} layout={layout} cols={10} rowHeight={280} width={1400} margin={[30, 30]} >
        <Widget key='TimerWidget'>
          <CardHeader 
              title={<Typography className={classes.headerTitle}>Odliczanie</Typography>}
              avatar={
              <TimerIcon className={classes.cardHeaderIcon}/>
              }
              action={
              <IconButton aria-label='settings'>
                  <MoreVertIcon className={classes.cardHeaderIcon}/>
              </IconButton>
              }>
          </CardHeader>
          <Divider/>
          <TimerWidgetContent/>
        </Widget>
        <Widget key='NotificationWidget'>
          <CardHeader 
            title={<Typography className={classes.headerTitle}>Powiadomienia</Typography>}
            avatar={
              <NotificationsIcon className={classes.cardHeaderIcon}/>
            }
            action={
            <IconButton aria-label='settings'>
                <MoreVertIcon className={classes.cardHeaderIcon}/>
            </IconButton>
            }>
          </CardHeader>
          <Divider style={{backgroundColor:'secondary'}}/>
          <NotificationWidgetContent/>
        </Widget>
        <Widget key='ReminderWidget'>
          <CardHeader 
            title={<Typography className={classes.headerTitle}>Przypomnienia</Typography>}
            avatar={
              <PriorityHighRoundedIcon className={classes.cardHeaderIcon}/>
            }
            action={
              <IconButton aria-label='settings'>
                  <MoreVertIcon className={classes.cardHeaderIcon}/>
              </IconButton>
              }>
          </CardHeader>
          <Divider style={{backgroundColor:'secondary'}}/>
          <ReminderWidgetContent/>
        </Widget>
        <Widget key='ProgressWidget'>
          <CardHeader
            title={<Typography className={classes.headerTitle}>Postęp przygotowań</Typography>}
            avatar={
              <BubbleChartIcon className={classes.cardHeaderIcon}/>
            }
            action={
              <IconButton aria-label='settings'>
                  <MoreVertIcon className={classes.cardHeaderIcon}/>
              </IconButton>
              }>
          </CardHeader>
          <Divider style={{backgroundColor:'secondary'}}/>
        </Widget>
        <Widget key='PhotosWidget'>
           <CardHeader 
            title={<Typography className={classes.headerTitle}>Moje zdjęcia</Typography>}
            avatar={
              <CameraAltIcon className={classes.cardHeaderIcon}/>
            }
            action={
              <IconButton aria-label='settings'>
                  <MoreVertIcon className={classes.cardHeaderIcon}/>
              </IconButton>
              }>
          </CardHeader>
          <Divider style={{backgroundColor:'secondary'}}/>
        </Widget>
       
      </GridLayout>
  )
}

export default WeddingCouple;