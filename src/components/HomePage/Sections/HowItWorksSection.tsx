import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import MockupImage from 'assets/img/mockup.png';
import { Box, Button, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from 'theme/theme';

const StyledTimeline = styled(Timeline)(({ theme }) => ({
  '& .MuiTimelineItem-root::before': {
    content: "none",
  },
  '& .MuiTimelineDot-root': {
    height: "16px",
    width: "16px",
    margin: '2px'
  },
  '& .MuiTimelineConnector-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
  },
}));

const StyledBox = styled(Timeline)(({ theme }) => ({
  padding: '2rem',
  display: "flex",
  flexDirection: 'row',
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
  },
  '& img': {
    height: "60vh", 
    width: "auto",
    margin: '1rem',

    [theme.breakpoints.down('md')]: {
      height: "auto",
      width: "50vw",
    },
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  margin:'2rem 3rem 0 3rem',
  [theme.breakpoints.down('lg')]: {
    margin: 0
  }
}));

const HowItWorksSection = () => {
  return (
    <Box  width={"80vw"}>
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
  > 
    <SectionTitle
      gutterBottom variant="h1" 
      align={'center'}
      color={'primary'}
    >
      Jak to działa?
    </SectionTitle>
    </Box>
    <Divider style={{width: "43vw", height: "0.6rem", backgroundColor: `${theme.palette.secondary.main}`}}/>
    <StyledBox> 
      <img
        alt="mockup Wedding Planner"
        src={MockupImage}
        title="Znajdź wolontariusza"
      >
      </img>
        <StyledTimeline position='right'>
          <TimelineItem >
            <TimelineSeparator>
              <TimelineDot color="secondary" style={{border: "4px solid white"}}/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <Typography style={{fontWeight: 800, marginBottom: '1.6rem'}}>Krok 1.</Typography>
                <Typography paragraph>
                    Zakładacie konto i wprowadzacie podstawowe informacje o ślubie - czas, miejsce, rodzaj uroczystości (ślub cywilny lub konkordatowy), wybieracie główny motyw ślubu i rozpoczynacie planowanie.
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" style={{border: "4px solid white"}}/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Box>
                  <Typography style={{fontWeight: 800, marginBottom: '1.6rem'}}>Krok 2.</Typography>
                  <Typography paragraph>
                      Przygotowujecie projekt zaproszenia i wysyłacie zaproszenia do osób na Waszej liście gości. Możecie również określić takie role jak świadek/świadkowa i umożliwić im dostęp do grona osób, z którymi chcecie świętować wieczór panieński lub kawalerski.                  </Typography>
                </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" style={{border: "4px solid white"}} />
              <TimelineConnector sx={{height: '60%'}}/>
            </TimelineSeparator>
            <TimelineContent>
                <Box>
                  <Typography style={{fontWeight: 800, marginBottom: '1.6rem'}}>Krok 3.</Typography>
                  <Typography paragraph>
                    Planowanie możecie ograniczyć głównie do listy gości i budżetu, ale możecie również skorzystać z wielu przygotowanych przez nas modułów, umożliwiających m. in. zaplanowanie rozmieszczenia gości przy stole, przeglądanie noclegów w pobliżu lokalizacji Waszego ślubu, przygotowanie listy zadań, czy stworzenie galerii zdjęć z uroczystości.   
                  </Typography> 
                  <Button size="large" variant="contained" color="primary" style={{margin: '2rem 0'}}>
                            ZOBACZ DEMO
                  </Button>             
                </Box>
            </TimelineContent>
          </TimelineItem>
        </StyledTimeline>
  </StyledBox>
</Box>
  );
};

export default HowItWorksSection;