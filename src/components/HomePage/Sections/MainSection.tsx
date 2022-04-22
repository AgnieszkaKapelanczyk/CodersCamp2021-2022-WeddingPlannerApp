import { Box, Typography, Button } from '@mui/material';
import MainImage from '../../../assets/img/hero.jpg';
import { styled } from '@mui/material/styles';
import { theme } from 'theme/theme';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${MainImage})`,
  backgroundSize: 'cover',
  height: 'auto',
  width: 'auto',
}));

const MainSection = () => {
  return (
    <StyledBox>
      <Box>
        <Typography
          variant="h1"
          gutterBottom
          style={{
            color: `${theme.palette.primary.main}`,
            fontFamily: `${theme.typography.fontFamily}`,
            fontSize: '5.4rem',
            paddingTop: '35vh',
            paddingLeft: '3vw',
          }}
        >
          Wedding Planner
        </Typography>
        <Typography
          variant="h3"
          style={{
            color: `${theme.palette.primary.contrastText}`,
            fontFamily: `${theme.typography.h4.fontFamily}`,
            fontSize: '2.6rem',
            paddingLeft: '8vw',
          }}
        >
          Zaplanuj ślub swoich marzeń, przygotuj
          <br />
          projekt zaproszenia i wyślij do swoich gości!
        </Typography>
        <Button
          variant="contained"
          size="medium"
          color="primary"
          style={{
            color: `${theme.palette.primary.contrastText}`,
            fontSize: `${theme.typography.button.fontSize}`,
            fontFamily: `${theme.typography.button.fontFamily}`,
            letterSpacing: `${theme.typography.button.letterSpacing}`,
            fontWeight: `${theme.typography.button.fontWeight}`,
            padding: '0.6rem 2rem',
            cursor: 'pointer',
            marginTop: '5vh',
            marginLeft: '15vw',
            marginBottom: '8vh',
            textTransform: 'uppercase',
          }}
        >
          Zaczynam planować swój ślub
        </Button>
      </Box>
    </StyledBox>
  );
};

export default MainSection;
