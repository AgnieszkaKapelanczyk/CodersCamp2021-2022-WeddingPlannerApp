import { Box, Typography, Button } from '@mui/material';
import SubscribeSectionImage from '../../../assets/img/subscryption.jpg';
import { theme } from 'theme/theme';

const SubscribeSection = () => {
  const styles = {
    subscribeSection__image: {
      backgroundImage: `url(${SubscribeSectionImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: 'auto',
      width: 'auto',
    },
  };

  return (
    <Box style={styles.subscribeSection__image}>
      <Box sx={{ background: 'rgb(0,0,0,0.6)',  paddingTop: '14vh',paddingLeft: '4vw', paddingBottom: '8vh',}}>   
      <Typography
        style={{
          color: `${theme.palette.secondary.main}`,
          fontFamily: `${theme.typography.fontFamily}`,
          fontSize: '4.4rem',
        }}
      >
        Dołącz do listy subskrybentów
      </Typography>
      <Typography style={{ color: `${theme.palette.secondary.main}` }}>
        Zostać subskrybentem, jeeli chcesz być informowany o nowych funkcjonalnościach <br />
        naszej aplikacji lub o promocyjnych ofertach od naszych partnerów!
      </Typography>
      <Button size="large" variant="contained" color="primary" style={{ margin: '2rem 0', textTransform: 'uppercase' }}>
        Zaczynam planować swój ślub
      </Button>
      </Box>
    </Box>
  );
};

export default SubscribeSection;
