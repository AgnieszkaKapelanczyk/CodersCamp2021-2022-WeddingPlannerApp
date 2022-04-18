import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MockupImage from 'assets/img/mockup.png';
import { Box, Typography } from '@mui/material';

const HowItWorksSection = () => {
  return (
    <Box
      id={"section-how-it-works"}
      padding={2}
      my={2}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
  > 
    <Typography
      gutterBottom variant="h1" 
      align={'center'}
      color={'primary'}
      style={{
        margin:'2rem 3rem'
      }}
    >
      Jak to działa?
    </Typography>
    <Box style={{display: 'flex'}}>
    <Box padding={2}  display={"flex"}>
      <img
        alt="mockup Wedding Planner"
        src={MockupImage}
        title="Znajdź wolontariusza"
        style={{
          maxWidth: '400px',
          margin: '1rem'
        }}
      >
      </img>
    </Box>
      <Box  display={"flex"}>
        <Timeline position='right'>
          <TimelineItem >
            <TimelineSeparator>
              <TimelineDot color="secondary" style={{border: "1px solid white"}}/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <Typography>Krok 1.</Typography>
                <Typography paragraph>
                    Zakładacie konto i wprowadzacie podstawowe informacje o ślubie - czas, miejsce, rodzaj uroczystości (ślub cywilny lub konkordatowy), wybieracie główny motyw ślubu i rozpoczynacie planowanie.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" style={{border: "1px solid white"}}/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Box>
                  <Typography>Krok 2.</Typography>
                  <Typography paragraph>
                      Przygotowujecie projekt zaproszenia i wysyłacie zaproszenia do osób na Waszej liście gości. Możecie również określić takie role jak świadek/świadkowa i umożliwić im dostęp do grona osób, z którymi chcecie świętować wieczór panieński lub kawalerski.                  </Typography>
                </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" style={{border: "1px solid white"}} />
            </TimelineSeparator>
                <Box>
                  <Typography>Krok 3.</Typography>
                  <Typography paragraph>
                    Planowanie możecie ograniczyć głównie do listy gości i budżetu, ale możecie również skorzystać z wielu przygotowanych przez nas modułów, umożliwiających m. in. zaplanowanie rozmieszczenia gości przy stole, przeglądanie noclegów w pobliżu lokalizacji Waszego ślubu, przygotowanie listy zadań, czy stworzenie galerii zdjęć z uroczystości.   
                  </Typography>              
                  </Box>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
    
    
  </Box>

  );
};

export default HowItWorksSection;
