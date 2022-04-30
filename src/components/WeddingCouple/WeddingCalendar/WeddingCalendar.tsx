import { Card, Box, styled, Typography} from "@mui/material";
import { useState } from 'react';
import FullCalendar, {EventClickArg, EventInput} from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import SaveDialog from "./SaveDialog";
import ColorChip from "./ColorChip";

const initialData: EventInput[] =[
  {
    title:'Ślub',
    start: '2022-05-21',
    backgroundColor:'#FF1A4B',
    borderColor:'#FF1A4B'
  },
  {
    title:'Wieczór panieński',
    start:'2022-05-14',
    backgroundColor:'#FF1A4B',
    borderColor:'#FF1A4B'
  },
  {
    title:'Ostateczne podanie liczby gości',
    start:'2022-04-28',
    backgroundColor:'#68B24E',
    borderColor:'#68B24E'
  },
  {
    title:'Zakupy- pan młody',
    start:'2022-04-05',
    backgroundColor:'#C26D6D',
    borderColor:'#C26D6D'
  }
]


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
  },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  width:'40rem', 
  [theme.breakpoints.down('md')]: {
    width:'25rem',
    marginTop:'1rem'
  },
}));



const WeddingCalendar = () => {

  const [openSave, setOpenSave] = useState(false);
  const [date, setDate] = useState(new Date())
  const [data, setData] = useState<EventInput[]>(initialData)
  
  const handleDateClick = (e:DateClickArg)=>{
    let dateClicked =e.dateStr
    console.log(dateClicked)
    setDate(e.date)
    setOpenSave(true);
  }

  const handleAdd= (data:any) =>{
    const event: EventInput={ ...data, start:date}
    setData(old=>[...old,event])
    setOpenSave(false)
  }

  const renderEvent=(e:EventClickArg)=>{
    return(
      <Typography>{e.event.title}</Typography>
    )
  }

  return (
    <StyledCard>
      <Box style={{marginRight:'3rem' ,display:'flex', flexDirection:'column'}}>
        <Typography variant="h3" style={{marginBottom:'1rem'}} >Etykiety:</Typography>
        <ColorChip/>
      </Box>
      <StyledBox>
        <FullCalendar 
          plugins={[ dayGridPlugin, interactionPlugin ]}
          events={data}
          eventContent={renderEvent}
          dateClick={handleDateClick}
        /> 
        <SaveDialog handleAdd={handleAdd} open={openSave} onClose={setOpenSave}/>
      </StyledBox>
    </StyledCard>
  )
}

export default WeddingCalendar