import { CardContent, ListItemText } from "@material-ui/core";
import { Link, ListItemButton } from '@mui/material';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

const ReminderWidgetContent = () => {
    
    return (
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
      );
    };
    
export default ReminderWidgetContent;