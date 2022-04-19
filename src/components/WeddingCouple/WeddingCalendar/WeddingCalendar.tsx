import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Card, Box, Button, Input} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {addEvent, eventInCalendar} from '../../../store/eventInCalendarSlice';
import { useDispatch, useSelector } from "react-redux";
import {makeStyles} from '@material-ui/core';
import { theme } from '../../../theme/theme';
import { useState } from 'react';

const useStyles = makeStyles({
  typoTitle: {
    color: theme.palette.tertiary.main,
  }
});

const localizer = momentLocalizer(moment);


const WeddingCalendar = () => {

  const events = useSelector(eventInCalendar);
  const classes = useStyles(theme);
  const [event, setEvent] = useState('');
  const dispatch = useDispatch();

  return (
    <Card style={{display:'flex', flexDirection:'column', margin:'3rem 8rem 5rem 3rem'}}>
      <Button onClick={()=>dispatch(addEvent.addEvent(event))} style={{margin:'2rem 0rem 1rem 2rem', width:'18rem'}} variant="contained" color='tertiary' startIcon={<AddCircleIcon />}>NOWE PRZYPOMNIENIE</Button>
      <Input placeholder='Nowe Przypomnienie' value={event} onChange={e=>setEvent(e.target.value)}  style={{margin:'0rem 0rem 1rem 2rem', width:'18rem'}}></Input>
      <Box style={{display:'flex', margin:'1rem 2rem 2rem 2rem'}}>
        <Box style={{marginRight:'3rem'}}>
          {events.map(e=><Card className={classes.typoTitle} style={{padding:'0.5rem 1rem', marginBottom:'1rem'}}>{e.title}</Card>)}
        </Box>
          <Calendar className="myCustomHeight"
            localizer={localizer}
            //events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
      </Box> 
    </Card>
  )
}

export default WeddingCalendar