import { Box, Typography, Button, Divider } from '@mui/material';
import AboutSectionImage from '../../../assets/img/homepage2.jpg';
import { theme } from 'theme/theme';
import { useDispatch } from 'react-redux';
import { openDialog, FormType } from 'store/dialogSlice';
import { styled } from '@mui/material/styles';

const BoxResponsive = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginLeft: '15%',
  },
}));

const AboutSection = () => {
  let dispatch = useDispatch();

  return (
    <Box sx={{margin: '5rem 0rem'}}>
      <Box>
        <Typography
          style={{
            color: `${theme.palette.primary.main}`,
            fontFamily: `${theme.typography.fontFamily}`,
            fontSize: '3rem',
            marginBottom: '1rem'
          }}
        >
          Kilka słów o Wedding Plannerze{' '}
        </Typography>
        <Divider style={{ height: '0.6rem', backgroundColor: `${theme.palette.secondary.main}` }} variant="inset" />
      </Box>
      <BoxResponsive>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: '4vh',
            gap: '20%',
            flexWrap: 'wrap',
          }}
        >
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
              onClick={() => dispatch(openDialog({ formType: FormType.rejestracjaEmail }))}
            >
              Zarejestruj się
            </Button>
          </Box>
        </Box>
      </BoxResponsive>
    </Box>
  );
};

export default AboutSection;
