import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Divider, FormControlLabel, FormGroup, List, ListItem, styled, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import { theme } from 'theme/theme';
import ProgressCircle from "common/ProgressCircle/ProgressCircle";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: '0 0 1.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

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

const ToDoList = () => {
    const [expanded, setExpanded] =useState<string | false>(false);
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

  return (
    <Box p={3} style={{width: '65vw'}}>
      <StyledAccordion expanded={expanded === 'panel1'} sx={{ borderRadius: '12px !important'}} onChange={handleChange('panel1')}>
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
        <AccordionDetails style={{display: 'flex', flexDirection:'row', margin: '2rem 1rem' }}>
            <Box display={'flex'} flexDirection={'column'} flex={2} justifyContent={'center'}>
              <Typography color={'primary'}>
                Punkty na liście zostaną odhaczone automatycznie po zaznaczeniu odpowiednich elementów w zakładkach: Ceremonia Ślubu, Budżet, Lista Gości.
              </Typography>
              <List>
                <FormGroup>
                  <ListItem>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ustalenie szacowanej daty ślubu" />
                  </ListItem>
                  <ListItem>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ustalenie budżetu" />
                  </ListItem>
                  <ListItem>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ustalenie listy gości" />
                  </ListItem>
                </FormGroup>
              </List>
            </Box>
            <Box display={'flex'} flex={1} justifyContent={'center'}>
              <ProgressCircle
                radius={ 60 }
                stroke={ 8 }
                progress={ 34 }
              />
            </Box>
        </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel2'} sx={{ borderRadius: '12px !important'}} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: `${theme.palette.tertiary.main}`}}/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <StyledNumbersTypography>2</StyledNumbersTypography>
          <StyledTypography>Przygotowania Ceremonii Ślubnej</StyledTypography>
        </AccordionSummary>
        <Divider style={{ backgroundColor: `${theme.palette.tertiary.main}`}}/>
        <AccordionDetails style={{display: 'flex', flexDirection:'row', margin: '2rem 1rem' }}>
            <Box display={'flex'} flexDirection={'column'} flex={2} justifyContent={'center'}>
                <Typography color={'primary'}>
                    Punkty na liście zostaną odhaczone automatycznie po zaznaczeniu odpowiednich elementów w zakładkach: Ceremonia Ślubu, Zaproszenie, Lista Gości.
                 </Typography>
                <List>
                  <FormGroup>
                    <ListItem>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Wybór miejsca ceremonii" />
                    </ListItem>
                    <ListItem>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Ustalenie daty i godziny ceremonii" />
                    </ListItem>
                    <ListItem>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Wybór świadków" />
                    </ListItem>
                    <ListItem>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Projekt zaproszenia" />
                    </ListItem>
                    <ListItem>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Wysłanie zaproszeń do gości" />
                    </ListItem>
                  </FormGroup>
                </List>
              </Box>
              <Box display={'flex'} flex={1} justifyContent={'center'}>
                <ProgressCircle
                  radius={ 60 }
                  stroke={ 8 }
                  progress={ 34 }
                />
              </Box>
             </AccordionDetails>
      </StyledAccordion>
      <StyledAccordion expanded={expanded === 'panel3'} sx={{ borderRadius: '12px !important'}} onChange={handleChange('panel3')}>
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
        <AccordionDetails style={{display: 'flex', flexDirection:'row', margin: '2rem 1rem' }}>
            <Box display={'flex'} flexDirection={'column'} flex={2} justifyContent={'center'}>
                <Typography color={'primary'}>
                    Punkty na liście zostaną odhaczone automatycznie po zaznaczeniu odpowiednich elementów w zakładce: Wesele.
                </Typography>
                <List>
                  <FormGroup>
                    <ListItem>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Wybór charakteru przyjęcia weselnego" />
                    </ListItem>
                    <ListItem>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Ustalenie miejsca przyjęcia weselnego" />
                    </ListItem>
                    <ListItem>
                      <FormControlLabel control={<Checkbox defaultChecked />} label="Wpłacenie zaliczki w restauracji" />
                    </ListItem>
                  </FormGroup>
                </List>
              </Box>
              <Box display={'flex'} flex={1} justifyContent={'center'}>
                <ProgressCircle
                  radius={ 60 }
                  stroke={ 8 }
                  progress={ 34 }
                />
              </Box>
        </AccordionDetails>
      </StyledAccordion>
    </Box>
  )
}

export default ToDoList;