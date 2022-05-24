import EditIcon from '@mui/icons-material/Edit';
import { Typography, Divider, styled,Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { theme } from '../../../../theme/theme';
import InsideCardContent from './InsideCardContent';
import {ReactComponent as Cross} from '../../../../assets/icon/cross.svg';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import ChurchIcon from '@mui/icons-material/Church';
import {ReactComponent as CityHall} from '../../../../assets/icon/cityhall_89246.svg';



const StyledAccordion = styled(Accordion)(() => ({
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

const TypeOfWedding = () => {

  const [expanded, setExpanded] =useState<string | false>(false);
  
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <StyledAccordion expanded={expanded === 'panel1'} sx={{ borderRadius: '8px !important', padding: '0.8rem 0'}} onChange={handleChange('panel1')}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon style={{color: `${theme.palette.tertiary.main}`}}/>}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
      style={{padding:'0 1rem'}}
    >
      <EditIcon style={{color: `${theme.palette.tertiary.main}`, fontSize:'1.8rem', marginLeft:'8px'}}/> 
      <StyledTypography>
      Rodzaj ślubu
      </StyledTypography>
    </AccordionSummary>
    <Divider style={{backgroundColor: `${theme.palette.tertiary.main}`}}/>
        <AccordionDetails style={{margin: '2rem 0'}}>
          <Typography variant="body1" style={{margin:'0 0 2rem 2rem'}}>Wybierz charakter uroczystości:</Typography>
          <InsideCardContent 
          title="KONKORDATOWY" 
          icon={<Cross fill='#6F59C9' style={{width:'3rem', margin:'0 0 1rem 0'}}/>} 
          iconFirstPopperTop={<NaturePeopleIcon style= {{fontSize: '5rem', color:'#6F59C9'}}/>} 
          iconFirstPopperBottom={<ChurchIcon style= {{fontSize: '5rem', color:'#6F59C9'}}/> }
          titleTop='W PLENERZE'
          titleBottom='W KOŚCIELE'
          />
          <InsideCardContent 
          title="CYWILNY" 
          icon={<EmojiFlagsIcon style= {{fontSize: '5rem', margin:'0 0 1rem 0', color:'#6F59C9'}}/>}
          iconFirstPopperTop={<NaturePeopleIcon style= {{fontSize: '5rem', color:'#6F59C9'}}/>} 
          iconFirstPopperBottom={<CityHall fill='#6F59C9' style={{width:'4rem', margin:'0 0 1rem 0'}}/>}
          titleTop='W PLENERZE'
          titleBottom='W URZĘDZIE'
          />
        </AccordionDetails>
</StyledAccordion>
    
  )
}

export default TypeOfWedding