import { CardContent, ListItemText } from "@material-ui/core";
import { Link, ListItemButton } from '@mui/material';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import CancelIcon from '@mui/icons-material/Cancel';
import MessageIcon from '@mui/icons-material/Message';
import {makeStyles} from '@material-ui/core';
import { theme } from "theme/theme";

const useStyles = makeStyles({
    successIcon: {
       color: theme.palette.success.main
    },
    errorIcon: {
        color: theme.palette.error.main
    },
    newMessageIcon: {
        color: theme.palette.secondary.main
    }

  });

const NotificationWidgetContent = () => {
    const classes = useStyles(theme);
    
    return (
        <CardContent style={{textAlign: 'center', margin:'0rem 1rem'}}>
            <ListItemButton
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
                 <LibraryAddCheckIcon 
                    className={classes.successIcon}
                    style={{margin:'1rem'}}/>
                <ListItemText
                    key={`listitem-2`}
                    primary={"Mateusz Kochanowski potwierdził przybycie."}       
                    ></ListItemText>
            </ListItemButton>
            <ListItemButton
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
                    primary={"Marcin Kowarczyk potwierdził nieobecność."}       
                    ></ListItemText>
            </ListItemButton>
            <ListItemButton
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
                    primary={"Katarzyna Olesiuk napisała wiadomość."}       
                    ></ListItemText>
            </ListItemButton>
    </CardContent>
      );
    };
    
export default NotificationWidgetContent;