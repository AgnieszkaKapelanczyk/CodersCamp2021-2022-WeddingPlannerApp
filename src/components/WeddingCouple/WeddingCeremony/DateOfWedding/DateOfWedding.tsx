import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Divider, styled, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { Box} from "@mui/material"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CustomTimePicker from '../DateOfWedding/CustomTimePicker';
import DatePicker from '../DateOfWedding/DatePicker';
import { useSelector } from "react-redux";
import {pickDateOfWedding} from 'store/dateOfWeddingSlice';
import {pickTimeOfWedding} from 'store/timeOfWeddingSlice';
import Timer from '../../WeddingCeremony/DateOfWedding/Timer'
import moment from 'moment';
import 'moment/locale/pl'  
moment.locale('pl')

const StyledAccordion = styled(Accordion)(() => ({
  margin: '0 0 1.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const StyledTypography = styled(Typography)(() => ({
  color: '#6F59C9',
  margin: '0.9rem',
  padding: '0 1rem',
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  display:'flex',
  justifyContent:'center',
  padding:'2rem',
  [theme.breakpoints.down('md')]: {
    padding:'1rem',
    flexDirection:'column',
    alignItems:'center',
    '& .MuiInputBase-root': {
      fontSize:'0.6rem',
    },
  },
}));


const DateOfWedding = () => {

  const [expanded, setExpanded] =useState<string | false>(false);
  const dateOfWedding = useSelector(pickDateOfWedding);
  const timeOfWedding = useSelector(pickTimeOfWedding) ;
  
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <StyledAccordion expanded={expanded === 'panel1'} sx={{ borderRadius: '8px !important', padding: '0.8rem 0'}} onChange={handleChange('panel1')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon style={{color: '#6F59C9'}}/>}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
      style={{padding:'0 1rem'}}
    >
      <CalendarTodayIcon style={{color: '#6F59C9'}}/> 
      <StyledTypography>
      Data ceremonii ślubnej
      </StyledTypography>
    </AccordionSummary>
    <Divider style={{backgroundColor: '#6F59C9'}}/>
        <StyledAccordionDetails>
        <Box style={{ display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <Box style={{ display:'flex', justifyContent:'center'}}>
            <Typography variant="body2">Wybierz datę ceremonii ślubnej</Typography>
          </Box>
          <DatePicker/>
          <Box style={{display:'flex', paddingBottom:'1rem'}}>
            <Typography variant="body2" style={{padding:'1rem'}}>Podaj godzinę:</Typography>
            <CustomTimePicker />  
          </Box>
        </Box>
        <Box style={{marginLeft:'2rem'}}>
            <Typography variant="body2" style={{paddingBottom:'2rem'}}>Wasz ślub odbędzie się:</Typography>
            <Typography variant="h3">{`${moment(dateOfWedding).format("dddd DD-MM-YYYY")} o godzinie ${moment(timeOfWedding).format("HH:mm")}`}</Typography>
            <Timer/>
        </Box>
        </StyledAccordionDetails>
</StyledAccordion>
  )
}

export default DateOfWedding