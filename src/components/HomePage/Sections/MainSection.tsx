import { Box, Typography, Button } from '@material-ui/core';
import MainImage from '../../../assets/img/hero.jpg';
import WeeddingLogo from '../../../assets/icon/logo.svg';

const styles = {
  mainSection__image: {
    backgroundImage: `url(${MainImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
  },
  mainSection__appNameText: {
    color: '#C26D6D',
    fontFamily: 'Abril Fatface',
    fontSize: '6.4rem',
    paddingTop: '20%',
    paddingLeft: '5%',
  },
  mainSection__text: {
    color: '#fff',
    fontSize: '3.2rem',
    fontFamily: 'Lato',
    paddingLeft: '10%',
  },
  mainSection__button: {
    backgroundColor: '#C26D6D',
    color: '#fff',
    boxShadow: 'none',
    // textTransform: 'uppercase',
    fontSize: '1rem',
    padding: '14px 20px',
    lineHeight: 1.5,
    cursor: 'pointer',
    marginTop: '3%',
    marginLeft: '33%',
  },
};

const MainSection = () => {
  return (
    <Box style={styles.mainSection__image}>
      <Typography variant="h1" gutterBottom style={styles.mainSection__appNameText}>
        Wedding Planner
      </Typography>
      {/* <Box src={WeeddingLogo} /> */}
      <Typography variant="h3" style={styles.mainSection__text}>
        Zaplanuj ślub swoich marzeń, przygotuj
        <br />
        projekt zaproszenia i wyślij do swoich gości!
      </Typography>
      <Button variant="contained" size="medium" style={styles.mainSection__button}>
        Zaczynam planować swój ślub
      </Button>
    </Box>
  );
};

export default MainSection;
