import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Divider, FormControlLabel, FormGroup, List, ListItem, styled, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { theme } from 'theme/theme';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import TieIcon from 'assets/icon/tie.svg';
import InfoIcon from '@mui/icons-material/Info';
import ProgressCircle from "common/ProgressCircle/ProgressCircle";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: '0 0 1.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  margin: '0.9rem',
  padding: '0 1rem',
}));

const WeddingParty = () => {
    const [expanded, setExpanded] =useState<string | false>(false);
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

  return (
    <Box p={3} style={{width: '65vw'}}>
      <StyledAccordion expanded={expanded === 'panel1'} sx={{ borderRadius: '8px !important'}} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: `${theme.palette.tertiary.main}`}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
           <InfoIcon style={{color: `${theme.palette.tertiary.main}`, position: 'relative', top: '16px',  left: '10px'}}/>
          <StyledTypography>
            Informacje o Przyjęciu Weselnym
          </StyledTypography>
        </AccordionSummary>
        <Divider style={{backgroundColor: `${theme.palette.tertiary.main}`}}/>
            <AccordionDetails style={{display: 'flex', flexDirection:'row', margin: '2rem 1rem' }}>
              
            </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel2'} sx={{ borderRadius: '8px !important'}} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fill: `${theme.palette.tertiary.main}`}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <img src={TieIcon} alt="" style={{height: '24px', position: 'relative', top: '16px', left: '10px'}}/>
          <StyledTypography>Lista pytań do sali weselnej/restauracji</StyledTypography>
        </AccordionSummary>
        <Divider style={{ backgroundColor: `${theme.palette.tertiary.main}`}}/>
            <AccordionDetails style={{display: 'flex', flexDirection:'row', margin: '2rem 1rem' }}>

            </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel3'} sx={{ borderRadius: '8px !important'}} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: `${theme.palette.tertiary.main}`}}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <ShoppingBasketIcon style={{color: `${theme.palette.tertiary.main}`, position: 'relative', top: '15px',  left: '10px'}}/>
          <StyledTypography>
            Proponowane noclegi w okolicy
          </StyledTypography>
        </AccordionSummary>
        <Divider style={{ backgroundColor: `${theme.palette.tertiary.main}`}}/>
            <AccordionDetails style={{display: 'flex', flexDirection:'row', margin: '2rem 1rem' }}>
              
            </AccordionDetails>
      </StyledAccordion>
    </Box>
  )
}

export default WeddingParty;