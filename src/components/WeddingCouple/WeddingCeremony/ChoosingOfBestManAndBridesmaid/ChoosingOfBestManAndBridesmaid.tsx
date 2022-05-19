import React from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AfterChoosing from './AfterChoosing';
import { Accordion, AccordionDetails, AccordionSummary, Divider, styled, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import BeforeChoosing from './BeforeChoosing';


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

const ChoosingOfBestManAndBridesmaid = () => {
    const [expanded, setExpanded] =useState<string | false>(false);
  
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
      <PersonPinIcon style={{color: '#6F59C9'}}/> 
      <StyledTypography>
      Wybór świadków
      </StyledTypography>
    </AccordionSummary>
    <Divider style={{backgroundColor: '#6F59C9'}}/>
        <AccordionDetails style={{margin: '2rem 0'}}>
          <AfterChoosing title='Świadek Panny Młodej' name='Kamila Szoltysik'/> 
          <BeforeChoosing title='Świadek Panna Młodego'/>
        </AccordionDetails>
</StyledAccordion>
  )
}

export default ChoosingOfBestManAndBridesmaid