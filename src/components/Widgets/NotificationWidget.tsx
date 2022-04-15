import { CardHeader, Divider, IconButton, Link, ListItemButton, ListItemText, styled, Typography } from '@mui/material';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import CancelIcon from '@mui/icons-material/Cancel';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {makeStyles} from '@material-ui/core';
import { theme } from "../../theme/theme";

const useStyles = makeStyles({
    successIcon: {
       color: theme.palette.success.main
    },
    errorIcon: {
        color: theme.palette.error.main
    },
    newMessageIcon: {
        color: theme.palette.secondary.main
    },
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

const NotificationWidget = () => {
    const classes = useStyles(theme);
    
    return (
        <>
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
             <StyledListButton
                        key={`listitembutton-1}`} 
                        style={{width: "100%"}} 
                        disableGutters
                        dense
                        component={Link}
            >
                <LibraryAddCheckIcon 
                    className={classes.successIcon}
                    style={{margin:'1rem'}}/>
                <ListItemText
                    key={`listitem-1`}
                    primary= {
                        <>
                          <Typography
                            style={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                          > Za dwa dni masz umówione spotkanie w sprawie 
                          menu weselnego.
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
                 <LibraryAddCheckIcon 
                    className={classes.successIcon}
                    style={{margin:'1rem'}}/>
                <ListItemText
                    key={`listitem-2`}
                    primary= {
                        <>
                          <Typography
                            style={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                          > Mateusz Kochanowski potwierdził przybycie.
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
                 <CancelIcon
                    className={classes.errorIcon}
                    style={{margin:'1rem'}}/>
                <ListItemText
                    key={`listitem-2`}
                    primary= {
                        <>
                          <Typography
                            style={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                          > Marcin Kowarczyk potwierdził nieobecność.
                          </Typography>
                        </>
                      }
                  />
              </StyledListButton>
              <StyledListButton
                    key={`listitembutton-4}`} 
                    style={{width: "100%"}} 
                    disableGutters
                    dense
                    component={Link}
              >
                 <MessageIcon
                    className={classes.newMessageIcon}
                    style={{margin:'1rem'}}/>
                <ListItemText
                    key={`listitem-2`}
                    primary= {
                        <>
                          <Typography
                            style={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                          > Katarzyna Olesiuk napisała wiadomość.
                          </Typography>
                        </>
                      }
                  />
              </StyledListButton>
        </>
      );
    };
    
export default NotificationWidget;