import { Box, Typography, Button, Divider } from '@material-ui/core';
import AboutSectionImage from '../../../assets/img/homepage2.jpg';

const AboutSection = () => {
  const styles = {
    aboutSection__mainText: {
      color: '#C26D6D',
      fontFamily: 'Abril Fatface',
      fontSize: '4.5rem',
      paddingTop: '2%',
      paddingLeft: '5%',
    },

    aboutSection__rightSection: {},
    aboutSection__image: {
      width: '45%',
    },
    aboutSection__button: {
      backgroundColor: '#C26D6D',
      color: '#fff',
      marginTop: '3%',
    },
    aboutSection__divider: {
      height: '10px',
      backgroundColor: '#FEC5BB',
      borderRadius: '10px',
    },
    aboutSection__center: {
      display: 'flex',
      alignItems: 'center',

      paddingTop: '5%',
      gap: '10%',
    },
  };
  return (
    <Box>
      <Box>
        <Typography style={styles.aboutSection__mainText}>Kilka słów o Wedding Plannerze </Typography>
        <Divider style={styles.aboutSection__divider} variant="inset" />
      </Box>
      <Box style={styles.aboutSection__center}>
        <Box style={styles.aboutSection__image}>
          <img src={AboutSectionImage} width="100%" height="100%" />
        </Box>

        <Box style={styles.aboutSection__rightSection}>
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
          <Button variant="contained" size="medium" style={styles.aboutSection__button}>
            Zarejestruj się
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
