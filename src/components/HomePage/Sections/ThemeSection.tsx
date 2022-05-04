import { Box, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MovieIcon from '@mui/icons-material/Movie';
import ParkIcon from '@mui/icons-material/Park';
import MotywRustykalny from 'assets/img/motywRustykalny.png';
import MotywKlasyczny from 'assets/img/motywKlasyczny.png';
import MotywFilmowy from 'assets/img/motywFilmowy.png';
import { theme } from 'theme/theme';

const ThemeSection = () => {
  return (
    <Box>
      <Typography
        style={{
          color: `${theme.palette.primary.main}`,
          fontFamily: `${theme.typography.fontFamily}`,
          fontSize: '4.4rem',
          textAlign: 'center',
          paddingTop: '3vw',
          alignItems: 'center',
        }}
      >
        Najpopularniejsze motywy ślubu
      </Typography>
      <Box style={{ paddingTop: '4vw', color: '#FEC5BB' }}>
        <List style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
          <ListItem style={{ flexDirection: 'column' }}>
            <ListItemAvatar>
              <FavoriteIcon />
            </ListItemAvatar>
            <ListItemText primary="KLASYCZNY" />
            <img src={MotywRustykalny} alt="Motyw Rustykalny" width="90%" height="90%" />
          </ListItem>
          <ListItem style={{ flexDirection: 'column' }}>
            <ListItemAvatar>
              <ParkIcon />
            </ListItemAvatar>
            <ListItemText primary="RUSTYKALNY" />
            <img src={MotywKlasyczny} alt="Motyw Klasyczny" width="90%" height="90%" />
          </ListItem>
          <ListItem style={{ flexDirection: 'column' }}>
            <ListItemAvatar>
              <MovieIcon />
            </ListItemAvatar>
            <ListItemText primary="FILMOWY" />
            <img src={MotywFilmowy} alt="Motyw Filmowy" width="90%" height="90%" />
          </ListItem>
        </List>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default ThemeSection;
