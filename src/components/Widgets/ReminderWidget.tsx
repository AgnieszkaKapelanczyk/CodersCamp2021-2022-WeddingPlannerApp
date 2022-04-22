import { CardHeader, Divider, IconButton, Link, ListItemButton, ListItemText, styled, Typography } from '@mui/material';
import { theme } from "../../theme/theme";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import PriorityHighRoundedIcon from '@mui/icons-material/PriorityHighRounded';
import {makeStyles} from '@material-ui/core';

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

const StyledListButton = styled(ListItemButton)<{ component?: React.ElementType }>({
  '&:hover': {
    backgroundColor: theme.palette.tertiary.light,
    color:  theme.palette.tertiary.main,
    fontWeight: 600
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
          <Divider style={{ height: "1px", backgroundColor: `${theme.palette.secondary.main}`}}/>
          <StyledListButton
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
                  primary= {
                    <>
                      <Typography
                        style={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                      > Za dwa dni masz umówione spotkanie w sprawie menu weselnego.
                      </Typography>
                    </>
                  }
              />
          </StyledListButton>
          <StyledListButton
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
                  primary= {
                    <>
                      <Typography
                        style={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                      > W najbliższą sobotę o 11:00 zaczynają się nauki przedmałżeńskie.
                      </Typography>
                    </>
                  }
              />
          </StyledListButton>
          <StyledListButton
                      key={`listitembutton-3}`} 
                      style={{width: "100%"}} 
                      disableGutters
                      dense
                      component={Link}
          >
              <AlarmOnIcon 
                  color={'success'}
                  style={{margin:'1rem'}}/>
              <ListItemText
                  key={`listitem-3`}
                  primary= {
                    <>
                      <Typography
                        style={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                      > Za dwa dni masz umówione spotkanie w sprawie zespołu.
                      </Typography>
                    </>
                  }
              />
          </StyledListButton>
       </>
      );
    };
    
export default ReminderWidget;