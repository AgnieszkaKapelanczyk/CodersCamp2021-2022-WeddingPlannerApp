import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Divider, FormControlLabel, FormGroup, List, ListItem, styled, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { useState } from "react";
import { theme } from 'theme/theme';
import ProgressCircle from "common/ProgressCircle/ProgressCircle";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: '0 0 1.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: theme.palette.tertiary.main,
    '& .MuiAccordionDetails-root': {
      display: 'flex', 
      flexDirection:'row', 
      margin: '2rem 1rem',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column-reverse',
      },
    }
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  margin: '1rem',
  padding: '0.9rem 2rem',
}));

const StyledNumbersTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.tertiary.main,
  margin: '1rem',
  color: theme.palette.common.white,
  fontWeight: 600,
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  top: '16px',
  left: '10px'
}));

const StyledListItem = styled(ListItem)(({theme})=> ({
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
    cursor: 'pointer'
  }
}));

const StyledBox = styled(Box)(({theme})=> ({
  padding: '24px',
  width: '65vw',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
}));

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.tertiary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.tertiary.main,
    fontFamily: 'Lato',
    fontSize: 11,
    marginTop: 0
  },
}));

const ToDoList = () => {
    const [expanded, setExpanded] =useState<string | false>(false);
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

  return (
    <StyledBox>
      <StyledAccordion expanded={expanded === 'panel1'} sx={{ borderRadius: '8px !important'}} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: `${theme.palette.tertiary.main}`}}/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <StyledNumbersTypography>1</StyledNumbersTypography>
          <StyledTypography>
            Przygotowania wstępne
          </StyledTypography>
        </AccordionSummary>
        <Divider style={{backgroundColor: `${theme.palette.tertiary.main}`}}/>
        <AccordionDetails>
            <Box display={'flex'} flexDirection={'column'} flex={2} justifyContent={'center'}>
              <Typography color={'primary'} style={{marginLeft: '1rem', color: '#343434',}}>
                Punkty na liście zostaną odhaczone automatycznie po zaznaczeniu odpowiednich elementów w zakładkach: Ceremonia Ślubu, Budżet, Lista Gości.
              </Typography>
              <List>
                <FormGroup>
                  <StyledListItem >
                    <StyledTooltip title="Szczegóły w zakładce Ceremonia ślubu">
                      <FormControlLabel control={<Checkbox defaultChecked style={{color: `${theme.palette.tertiary.main}`}}/>} label="Ustalenie szacowanej daty ślubu" />
                    </StyledTooltip>
                  </StyledListItem>
                  <StyledListItem >
                    <StyledTooltip title="Szczegóły w zakładce Budżet">
                      <FormControlLabel control={<Checkbox defaultChecked style={{color: `${theme.palette.tertiary.main}`}}/>} label="Ustalenie budżetu" />
                    </StyledTooltip>
                  </StyledListItem>
                  <StyledListItem >
                  <StyledTooltip title="Szczegóły w zakładce Lista Gości">
                      <FormControlLabel control={<Checkbox defaultChecked style={{color: `${theme.palette.tertiary.main}`}}/>} label="Ustalenie listy gości" />
                    </StyledTooltip>
                  </StyledListItem>
                </FormGroup>
              </List>
            </Box>
            <Box display={'flex'} flex={1} flexDirection={'column'} justifyContent={'center'} style={{height: '50%'}}>
                <ProgressCircle
                  radius={ 60 }
                  stroke={ 8 }
                  progress={ 34 }
                />
                <Typography align={'center'} color={theme.palette.secondary.main} style={{fontWeight: 600, marginBottom: '2rem'}}>Postęp Twoich przygotowań</Typography>
            </Box>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel2'} sx={{ borderRadius: '8px !important'}} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: `${theme.palette.tertiary.main}`}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <StyledNumbersTypography>2</StyledNumbersTypography>
          <StyledTypography>Przygotowania Ceremonii Ślubnej</StyledTypography>
        </AccordionSummary>
        <Divider style={{ backgroundColor: `${theme.palette.tertiary.main}`}}/>
        <AccordionDetails>
            <Box display={'flex'} flexDirection={'column'} flex={2} justifyContent={'center'}>
                <Typography style={{margin: '1rem', color: '#343434'}}>
                    Punkty na liście zostaną odhaczone automatycznie po zaznaczeniu odpowiednich elementów w zakładkach: Ceremonia Ślubu, Zaproszenie, Lista Gości.
                 </Typography>
                <List>
                  <FormGroup>
                    <StyledListItem >
                      <StyledTooltip title="Szczegóły w zakładce Ceremonia Ślubu">
                        <FormControlLabel control={<Checkbox defaultChecked style={{color: `${theme.palette.tertiary.main}`}}/>} label="Wybór miejsca ceremonii" />
                      </StyledTooltip>
                    </StyledListItem>
                    <StyledListItem >
                      <StyledTooltip title="Szczegóły w zakładce Ceremonia Ślubu">
                        <FormControlLabel control={<Checkbox defaultChecked style={{color: `${theme.palette.tertiary.main}`}}/>} label="Ustalenie daty i godziny ceremonii" />
                      </StyledTooltip>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledTooltip title="Szczegóły w zakładce Ceremonia Ślubu">
                        <FormControlLabel control={<Checkbox defaultChecked style={{color: `${theme.palette.tertiary.main}`}}/>} label="Wybór świadków" />
                      </StyledTooltip>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledTooltip title="Szczegóły w zakładce Zaproszenia">
                        <FormControlLabel control={<Checkbox defaultChecked style={{color: `${theme.palette.tertiary.main}`}}/>} label="Projekt zaproszenia" />
                      </StyledTooltip>
                    </StyledListItem>
                    <StyledListItem>
                      <StyledTooltip title="Szczegóły w zakładce Zaproszenia">
                        <FormControlLabel control={<Checkbox defaultChecked style={{color: `${theme.palette.tertiary.main}`}}/>} label="Wysłanie zaproszeń do gości" />
                      </StyledTooltip>
                    </StyledListItem>
                  </FormGroup>
                </List>
              </Box>
              <Box display={'flex'} flex={1} flexDirection={'column'} justifyContent={'center'} style={{height: '50%'}}>
                <ProgressCircle
                  radius={ 60 }
                  stroke={ 8 }
                  progress={ 34 }
                />
                <Typography align={'center'} color={theme.palette.secondary.main} style={{fontWeight: 600, marginBottom: '2rem'}}>Postęp Twoich przygotowań</Typography>
              </Box>
             </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel3'} sx={{ borderRadius: '8px !important'}} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: `${theme.palette.tertiary.main}`}}/>}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <StyledNumbersTypography>3</StyledNumbersTypography>
          <StyledTypography>
            Przygotowania Przyjęcia Weselnego
          </StyledTypography>
        </AccordionSummary>
        <Divider style={{ backgroundColor: `${theme.palette.tertiary.main}`}}/>
        <AccordionDetails>
            <Box display={'flex'} flexDirection={'column'} flex={2} justifyContent={'center'}>
                <Typography style={{margin: '1rem', color: '#343434'}}>
                    Punkty na liście zostaną odhaczone automatycznie po zaznaczeniu odpowiednich elementów w zakładce: Wesele.
                </Typography>
                <List>
                  <FormGroup>
                    <StyledListItem >
                      <StyledTooltip title="Szczegóły w zakładce Wesele">
                        <FormControlLabel control={<Checkbox defaultChecked style={{color: `${theme.palette.tertiary.main}`}}/>} label="Wybór charakteru przyjęcia weselnego" />
                      </StyledTooltip>
                    </StyledListItem>
                    <StyledListItem >
                      <StyledTooltip title="Szczegóły w zakładce Wesele">
                        <FormControlLabel control={<Checkbox defaultChecked style={{color: `${theme.palette.tertiary.main}`}}/>} label="Ustalenie miejsca przyjęcia weselnego" />
                      </StyledTooltip>
                    </StyledListItem>
                    <StyledListItem >
                      <StyledTooltip title="Szczegóły w zakładce Budżet">
                        <FormControlLabel control={<Checkbox defaultChecked style={{color: `${theme.palette.tertiary.main}`}}/>} label="Wpłacenie zaliczki w restauracji" />
                      </StyledTooltip>
                    </StyledListItem>
                  </FormGroup>
                </List>
              </Box>
              <Box display={'flex'} flex={1} flexDirection={'column'} justifyContent={'center'} style={{height: '50%'}}>
                <ProgressCircle
                  radius={ 60 }
                  stroke={ 8 }
                  progress={ 34 }
                />
                <Typography align={'center'} color={theme.palette.secondary.main} style={{fontWeight: 600, marginBottom: '2rem'}}>Postęp Twoich przygotowań</Typography>
              </Box>
        </AccordionDetails>
      </StyledAccordion>
    </StyledBox>
  )
}

export default ToDoList;