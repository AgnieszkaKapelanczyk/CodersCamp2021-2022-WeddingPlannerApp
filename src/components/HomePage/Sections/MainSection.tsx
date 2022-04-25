import { Box, Typography, Button } from '@mui/material';
import MainImage from 'assets/img/hero.jpg';
import { styled } from '@mui/material/styles';
import { theme } from 'theme/theme';
import Logo from 'assets/icon/logo.svg';

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${MainImage})`,
  backgroundSize: 'cover',
  height: '100vh',
  width: 'auto',
}));

const StyledImg = styled('img')(({theme}) => ({
  height: '70px', 
  top: '10px', 
}));

const MainSection = () => {
  return (
    <StyledBox>
      <Box sx={{padding: '1rem 4rem'}}>
        <Typography
          variant="h1"
          gutterBottom
          style={{
            color: `${theme.palette.primary.main}`,
            fontFamily: `${theme.typography.fontFamily}`,
            paddingTop: '35vh',
            paddingLeft: '3vw',
          }}
        >
          Wedding Planner <StyledImg src={Logo} alt={''}/>
        </Typography>
        <Typography
          variant="h2"
          style={{
            color: `${theme.palette.primary.contrastText}`,
            fontFamily: `${theme.typography.h4.fontFamily}`,
            paddingLeft: '3vw',
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
