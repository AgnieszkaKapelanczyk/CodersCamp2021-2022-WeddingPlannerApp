//import {  momentLocalizer } from 'react-big-calendar';
//import 'react-big-calendar/lib/css/react-big-calendar.css';
//import moment from 'moment';
import { Card, Box, Button,Input, styled} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {addEvent, eventInCalendar} from '../../../store/eventInCalendarSlice';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles} from '@material-ui/core';
import { theme } from '../../../theme/theme';
import { useState } from 'react';
import FullCalendar, {EventInput} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import SaveDialog from "./SaveDialog";

const data: EventInput[] =[
  {
    title:'Ślub',
    start: '2022-05-21'},
  {
    title:'Wieczór panieński',
    start:'2022-05-14'
  },
  {
    title:'Ostateczne podanie liczby gości',
    start:'2022-04-28'
  },
  {
    title:'Zakupy- pan młody',
    start:'2022-04-05'
  }
]

const useStyles = makeStyles({
  typoTitle: {
    color: theme.palette.tertiary.main,
  }
});

const StyledCard = styled(Card)(({ theme }) => ({
  display:'flex',
  justifyContent:'center',
  padding:'2rem',
  margin:'3rem 8rem 5rem 3rem',
  [theme.breakpoints.down('md')]: {
    padding:'1rem',
    flexDirection:'column',
    alignItems:'center',
    margin:'1rem 3rem 1rem 2rem',
    '& .MuiInputBase-root': {
      fontSize:'1rem',
    },
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width:'40rem', 
  [theme.breakpoints.down('md')]: {
    width:'25rem',
    marginTop:'1rem'
  },
}));

//const localizer = momentLocalizer(moment);


const WeddingCalendar = () => {

  const events = useSelector(eventInCalendar);
  const classes = useStyles(theme);
  const [event, setEvent] = useState('');
  const dispatch = useDispatch();
  const [openSave, setOpenSave] = useState(false);
  const [date, setDate] = useState(new Date())

  const injectCellContent = (args:any) =>{
    return(
      <div>
        <button onClick={()=>saveRecored(args.date)}>{args.dayNumberText}</button>
      </div>
    )
  };

  const saveRecored =(date:Date) =>{
    setOpenSave(true);
    setDate(date)
  }

  return (
    <StyledCard>
      <Box style={{marginRight:'3rem' ,display:'flex', flexDirection:'column'}}>
        <Button color='tertiary' style={{marginBottom:'2rem'}} onClick={()=>dispatch(addEvent.addEvent(event))} variant="contained" startIcon={<AddCircleIcon />}>NOWE PRZYPOMNIENIE</Button>
        <Input placeholder='Nowe Przypomnienie' value={event} onChange={e=>setEvent(e.target.value)}></Input>
        <Box style={{marginTop:'3rem'}}>
        {events.map(e=><Card className={classes.typoTitle} style={{padding:'0.5rem 1rem', marginBottom:'1rem'}}>{e.title}</Card>)}
        </Box> 
      </Box>
      <StyledBox>
        <FullCalendar 
          plugins={[ dayGridPlugin, interactionPlugin ]}
          events={data}
          dayCellContent={injectCellContent}
        /> 
        <SaveDialog open={openSave} onClose={setOpenSave} date={date}/>
      </StyledBox>
    </StyledCard>
  )
}

export default WeddingCalendar