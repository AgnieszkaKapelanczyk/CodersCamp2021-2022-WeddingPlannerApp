import {  Accordion, AccordionDetails, AccordionSummary, Divider, styled, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ReactNode, useState } from "react";
import { theme } from 'theme/theme';
  

const StyledAccordion = styled(Accordion)(() => ({
  margin: '1.5rem 0 1.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding:'1.2rem 0'
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  margin: '0.9rem',
  padding: '0 1rem',
}));

const CardAccordion = (props:{title:string, children:ReactNode,icon:ReactNode}) => {

    const [expanded, setExpanded] =useState<string | false>(false);
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

  return (
    <StyledAccordion expanded={expanded === 'panel1'} sx={{ borderRadius: '8px !important'}} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: `${theme.palette.tertiary.main}`}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
           {props.icon}
          <StyledTypography>
            {props.title}
          </StyledTypography>
        </AccordionSummary>
        <Divider style={{backgroundColor: `${theme.palette.tertiary.main}`}}/>
            <AccordionDetails style={{margin: '2rem 0'}}>
                {props.children}
            </AccordionDetails>
</StyledAccordion>
  )
}

export default CardAccordion

