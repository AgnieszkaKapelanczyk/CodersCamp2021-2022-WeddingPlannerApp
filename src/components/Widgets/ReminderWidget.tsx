import { CardContent, ListItemText, Divider, IconButton } from "@material-ui/core";
import { Link, ListItemButton } from '@mui/material';
import { Typography, makeStyles, CardHeader } from "@material-ui/core";
import { theme } from "theme/theme";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';

const useStyles = makeStyles({
  cardHeaderIcon: {
    color: theme.palette.tertiary.main,
    position: 'relative',
    top: '2px',
  },
  headerTitle: {
    color: theme.palette.tertiary.main,
  }
});

const ReminderWidget = () => {
    const classes = useStyles(theme);
    
    return (
       <>
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
          <CardContent style={{textAlign: 'center', padding:'1rem'}}>
          <ListItemButton
                      key={`listitembutton-1}`} 
                      style={{width: "100%"}} 
                      disableGutters
                      dense
                      component={Link}
          >
              <AlarmOnIcon 
                  color={'success'}
                  style={{margin:'1rem'}}/>
              <ListItemText
                  key={`listitem-1`}
                  primary="Za dwa dni masz umówione spotkanie w sprawie 
                  menu weselnego."
              ></ListItemText>
          </ListItemButton>
          <ListItemButton
                  key={`listitembutton-2}`} 
                  style={{width: "100%"}} 
                  disableGutters
                  dense
                  component={Link}
          >
               <AlarmOnIcon 
                  color={'success'}
                  style={{margin:'1rem'}}/>
              <ListItemText
                  key={`listitem-2`}
                  primary={"W najbliższą sobotę o 11:00 zaczynają się nauki przedmałżeńskie."}       
                  ></ListItemText>
          </ListItemButton>
        </CardContent>
       </>
      );
    };
    
export default ReminderWidget;