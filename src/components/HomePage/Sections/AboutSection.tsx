import { Box, Typography, Button, Divider } from '@mui/material';
import AboutSectionImage from '../../../assets/img/homepage2.jpg';
import { theme } from 'theme/theme';

const AboutSection = () => {
  return (
    <Box>
      <Box>
        <Typography
          style={{
            color: `${theme.palette.primary.main}`,
            fontFamily: `${theme.typography.fontFamily}`,
            fontSize: '4.5rem',
            paddingTop: '3vh',
            paddingLeft: '4vw',
          }}
        >
          Kilka słów o Wedding Plannerze{' '}
        </Typography>
        <Divider style={{ height: '0.6rem', backgroundColor: `${theme.palette.secondary.main}` }} variant="inset" />
      </Box>
      <Box style={{ display: 'flex', alignItems: 'center', paddingTop: '4vh', gap: '10%' }}>
        <Box style={{ width: '45%' }}>
          <img src={AboutSectionImage} alt="WeddingPhoto" width="100%" height="100%" />
        </Box>
        <Box>
          <Typography>
            Wedding Planner powstał z myślą o wszystkich
            <br />
            parach, które marzą o idealnie przygotowanej
            <br />
            uroczystości. Tak naprawdę w jendym miejscu
            <br />
            moecie stworzyć projekt zaproszenia, przygotować
            <br />
            listę gości, do których checie je wysłać oraz
            <br />
            umoliwić gościom potwierdzanie swojego przybycia!.
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={{ margin: '2rem 0', width: '70%', textTransform: 'uppercase', marginTop: '3vh' }}
          >
            Zarejestruj się
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
