import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, styled, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { theme } from 'theme/theme';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DressIcon from 'assets/icon/dress.svg';
import InfoIcon from '@mui/icons-material/Info';
import BrideInfo from "./components/BrideInfo";
import BrideClothes from "./components/BrideClothes/BrideClothes";
import BrideShops from "./components/BrideClothes/BrideShops/BrideShops";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: '0 0 1.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
    '& .MuiAccordionDetails-root': {
      display: 'flex', 
      flexDirection:'row', 
      margin: '2rem 1rem',
      alignItems: 'flex-start',
        [theme.breakpoints.down('md')]: {
          display: 'flex',
          flexDirection: 'column-reverse',
        },
    }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  margin: '0.9rem',
  padding: '0 1rem',
}));

const StyledBox = styled(Box)(({theme})=> ({
  padding: '24px',

}));

const Bride = () => {
    const [expanded, setExpanded] =useState<string | false>(false);
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

  return (
    <StyledBox>
      <StyledAccordion expanded={expanded === 'panel1'} sx={{ borderRadius: '8px !important', padding: '0.8rem 0'}} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: `${theme.palette.tertiary.main}`}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
           <InfoIcon style={{color: `${theme.palette.tertiary.main}`, fontSize:'1.8rem', marginLeft:'8px'}}/>
          <StyledTypography>
            Informacje o Pannie Młodej
          </StyledTypography>
        </AccordionSummary>
        <Divider style={{backgroundColor: `${theme.palette.tertiary.main}`}}/>
            <AccordionDetails style={{margin: '2rem 0'}}>
                <BrideInfo/>
            </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel2'} sx={{ borderRadius: '8px !important', padding: '0.8rem 0'}} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{fill: `${theme.palette.tertiary.main}`}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <img src={DressIcon} alt="" style={{height: '28px', marginLeft:'8px'}}/>
          <StyledTypography>Ubiór</StyledTypography>
        </AccordionSummary>
        <Divider style={{ backgroundColor: `${theme.palette.tertiary.main}`}}/>
            <AccordionDetails style={{ margin: '2rem 1rem', justifyContent:'space-between' }}>
              <BrideClothes/>
            </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel3'} sx={{ borderRadius: '8px !important', padding: '0.8rem 0'}} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: `${theme.palette.tertiary.main}`}}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <ShoppingBasketIcon style={{color: `${theme.palette.tertiary.main}`, fontSize:'1.8rem', marginLeft:'8px'}}/>
          <StyledTypography>
          Proponowane salony sukien ślubnych w Twojej okolicy
          </StyledTypography>
        </AccordionSummary>
        <Divider style={{ backgroundColor: `${theme.palette.tertiary.main}`}}/>
            <AccordionDetails style={{display: 'flex', flexDirection:'row', margin: '2rem 1rem' }}>
                <BrideShops/>
            </AccordionDetails>
      </StyledAccordion>
    </StyledBox>
  )
}

export default Bride;