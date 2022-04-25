import { Box, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';
import FeaturesSectionImage from '../../../assets/img/homepage3.jpg';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import SearchIcon from '@mui/icons-material/Search';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CalculateIcon from '@mui/icons-material/Calculate';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ModeIcon from '@mui/icons-material/Mode';
import { theme } from 'theme/theme';

const FeaturesSection = () => {
  return (
    <Box style={{ paddingBottom: '5vh' }}>
      <Box>
        <Typography
          style={{
            color: `${theme.palette.primary.main}`,
            fontFamily: `${theme.typography.fontFamily}`,
            fontSize: '3rem',
            paddingTop: '3vh',
            paddingLeft: '4vw',
          }}
        >
          Co możesz zrobić w Weeding Planerze?{' '}
        </Typography>
        <Divider
          component="li"
          style={{
            width: '43vw',
            height: '0.6rem',
            backgroundColor: `${theme.palette.secondary.main}`,
            marginBottom: '4rem',
          }}
        />
      </Box>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          textTransform: 'uppercase',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '5%',
          flexWrap: 'wrap',
        }}
      >
        <Box>
          <List style={{ color: `${theme.palette.primary.main}`, fontFamily: `${theme.typography.fontFamily}` }}>
            <ListItem>
              <ListItemAvatar>
                <MarkAsUnreadIcon sx={{ fontSize: 'large' }} />
              </ListItemAvatar>
              <ListItemText primary="Zaproszenia ślubne" />
            </ListItem>
            <Divider style={{ width: '30vw' }} component="li" />
            <ListItem>
              <ListItemAvatar>
                <PeopleAltIcon sx={{ fontSize: 'large' }} />
              </ListItemAvatar>
              <ListItemText primary="Przygotowanie listy gości" />
            </ListItem>
            <Divider style={{ width: '30vw' }} component="li" />
            <ListItem>
              <ListItemAvatar>
                <CardGiftcardIcon sx={{ fontSize: 'large' }} />
              </ListItemAvatar>
              <ListItemText primary="Przygotowanie listy prezentów" />
            </ListItem>
            <Divider style={{ width: '30vw' }} component="li" />
            <ListItem>
              <ListItemAvatar>
                <SearchIcon sx={{ fontSize: 'large' }} />
              </ListItemAvatar>
              <ListItemText primary="Propozycje najlepszych sal weselnych" />
            </ListItem>
            <Divider style={{ width: '30vw' }} component="li" />
            <ListItem>
              <ListItemAvatar>
                <ChairAltIcon sx={{ fontSize: 'large' }} />
              </ListItemAvatar>
              <ListItemText primary="Rozmieszczenie gości przy stołach" />
            </ListItem>
            <Divider style={{ width: '30vw' }} component="li" />
            <ListItem>
              <ListItemAvatar>
                <LocalBarIcon sx={{ fontSize: 'large' }} />
              </ListItemAvatar>
              <ListItemText primary="Planowanie wieczoru panieńskiego/kawalerskiego" />
            </ListItem>
            <Divider style={{ width: '30vw' }} component="li" />
            <ListItem>
              <ListItemAvatar>
                <CheckroomIcon sx={{ fontSize: 'large' }} />
              </ListItemAvatar>
              <ListItemText primary="Propozycje wyboru stroju" />
            </ListItem>
            <Divider style={{ width: '30vw' }} component="li" />
            <ListItem>
              <ListItemAvatar>
                <CalculateIcon sx={{ fontSize: 'large' }} />
              </ListItemAvatar>
              <ListItemText primary="Planowanie budetu" />
            </ListItem>
            <Divider style={{ width: '30vw' }} component="li" />
            <ListItem>
              <ListItemAvatar>
                <LightbulbIcon sx={{ fontSize: 'large' }} />
              </ListItemAvatar>
              <ListItemText primary="Inspiracje ślubne" />
            </ListItem>
            <Divider style={{ width: '30vw' }} component="li" />
            <ListItem>
              <ListItemAvatar>
                <ModeIcon sx={{ fontSize: 'large' }} />
              </ListItemAvatar>
              <ListItemText primary="Wybór motywu ślubnego" />
            </ListItem>
            <Divider style={{ width: '30vw' }} component="li" />
          </List>
        </Box>
        <Box style={{ width: '30%', height: '30%' }}>
          <img src={FeaturesSectionImage} alt="Para planująca ślub" width="100%" height="100%" />
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
