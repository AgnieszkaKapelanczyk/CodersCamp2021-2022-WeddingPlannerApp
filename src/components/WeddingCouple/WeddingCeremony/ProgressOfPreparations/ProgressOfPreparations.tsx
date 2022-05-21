import React, { useEffect } from 'react'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { Accordion, AccordionDetails, AccordionSummary, Divider, styled, Typography, Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { CircularProgressWithLabel } from './CircularProgress';
import ProgressCircle from 'common/ProgressCircle/ProgressCircle';
import { selectToDOList } from 'store/progressSlice';
import { task, toDoList } from 'components/WeddingCouple/ToDoList/tasks';
import { useAppSelector } from 'store/hooks';



const StyledBox = styled(Box)(({ theme }) => ({
  marginLeft:'3rem',
  [theme.breakpoints.down('md')]: {
    margin:'0rem',
  },
}));

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
  alignItems:'center',
  margin:'3rem',
  [theme.breakpoints.down('md')]: {
    margin:'1rem',
    flexDirection:'column',
  },
}));



const ProgressOfPreparations = () => {
  const [progress, setProgress] = useState<number>(0);
  const listTasks = useAppSelector(selectToDOList).weddingCeremony;
  const [toDoArray, setToDoArray] = useState<task[]>([]);
  const [expanded, setExpanded] =useState<string | false>(false);
  
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(()=>{
      setToDoArray(listTasks);
  },[listTasks]);

  useEffect(()=> {
      setProgress(Math.round((toDoArray.filter(el=>el.checked)).length*100/(toDoArray.length)));
  },[toDoArray]);

  return (
    <StyledAccordion expanded={expanded === 'panel1'} sx={{ borderRadius: '8px !important', padding: '0.8rem 0'}} onChange={handleChange('panel1')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon style={{color: '#6F59C9'}}/>}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
      style={{padding:'0 1rem'}}
    >
      <BubbleChartIcon style={{color: '#6F59C9'}}/> 
      <StyledTypography>
        Postęp przygotowań ceremonii ślubnej
      </StyledTypography>
    </AccordionSummary>
    <Divider style={{backgroundColor: '#6F59C9'}}/>
        <StyledAccordionDetails>
        <Box>
          <Typography variant="h3" style={{color: '#6F59C9'}}>GRATULACJE!</Typography>
          <Typography variant="body1" style={{paddingBottom:'1rem'}}>Wasz postęp przygotowań ceremonii <br/>ślubnej wynosi 75%.
            Wypełnij wszystkie <br/>pola w tej zakładce, aby uzyskać 100%.</Typography>
        </Box>
        <StyledBox>
        <ProgressCircle
                  radius={ 60 }
                  stroke={ 8 }
                  progress={ progress ? progress : 0 } 
                />
        </StyledBox>
        </StyledAccordionDetails>
</StyledAccordion>
  )
}

export default ProgressOfPreparations