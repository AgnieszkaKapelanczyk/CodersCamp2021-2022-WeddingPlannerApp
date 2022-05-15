import { Box, Typography, Button, Divider } from '@mui/material';
import AboutSectionImage from 'assets/img/homepage2.jpg';
import { theme } from 'theme/theme';
import { useDispatch } from 'react-redux';
import { openDialog, FormType } from 'store/dialogSlice';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '3rem 0',
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
  '& img': {
    height: '80vh',
    width: 'auto',
    margin: '1rem 1rem 1rem 0',

    [theme.breakpoints.down('md')]: {
      height: 'auto',
      width: '60vw',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));

const AboutSection = () => {
  const dispatch = useDispatch();

  return (
    <Box id={'about-section'} margin={'3rem 0'}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Typography
          align={'center'}
          style={{
            color: `${theme.palette.primary.main}`,
            fontFamily: `${theme.typography.fontFamily}`,
            fontSize: '2.8rem',
            margin: '1rem 3rem',
          }}
        >
          Kilka słów o Wedding Plannerze{' '}
        </Typography>
      </Box>
      <Divider
        style={{
          width: '53vw',
          height: '0.6rem',
          backgroundColor: `${theme.palette.secondary.main}`,
          position: 'relative',
          border: 'none',
        }}
      />
      <StyledBox>
        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-start'} alignItems={'center'} flex={1}>
          <Box component={'img'} src={AboutSectionImage} alt={'WeddingPhoto'} />
        </Box>
        <Box sx={{ margin: '8rem 4rem' }} flex={2}>
          <Typography align={'justify'}>
            Wedding Planner powstał z myślą o wszystkich parach, które marzą o idealnie przygotowanej uroczystości. Tak
            naprawdę w jednym miejscu możecie stworzyć projekt zaproszenia, przygotować listę gości, do których checie
            je wysłać oraz umożliwić gościom potwierdzanie swojego przybycia!
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="primary"
            style={{ margin: '2rem 0', width: '250px', textTransform: 'uppercase' }}
            onClick={() => dispatch(openDialog({ formType: FormType.rejestracjaEmail }))}
          >
            Zarejestruj się
          </Button>
        </Box>
      </StyledBox>
    </Box>
  );
};

export default AboutSection;
