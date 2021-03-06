import { Card, CardHeader, CardContent, Box, Divider, Typography } from '@mui/material';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import { theme } from 'theme/theme';
import logoprzed from 'assets/img/logo_przed_zalogowaniem.png';

const PlanSection = () => {
  const styles = {
    card: {
      maxWidth: ' 300px',
      minHeight: '400px',
      margin: '20px',
    },
    text: {
      color: theme.palette.primary.main,
      variant: theme.typography.body2,
      fontSize: '1.1rem',
    },
    text2: {
      color: theme.palette.primary.main,
      fontSize: '2rem',
      fontWeight: '700',
    },
    mainText: {
      color: '#C26D6D',
      fontFamily: 'Abril Fatface',
      fontSize: '4.5rem',
      paddingTop: '4%',
      paddingBottom: '3%',
    },
  };

  return (
    <Box sx={{ paddingBottom: '10vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignText: 'center', margin: '2rem 0', padding: '2rem' }}>
        <Typography style={styles.mainText}>Wybierz swój plan</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '3%', flexWrap: 'wrap' }}>
        <Card style={styles.card}>
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <CardHeader title="18zł/ miesiąc" subheader="STANDARD" style={styles.text2} />
          </Box>
          <CardContent>
            <Divider />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '10px' }}>
              <Box style={styles.text}>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> Nielimitowana ilość stworzonych projektów zaproszeń
                </Box>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> 3 Motywy ślubu do wyboru{' '}
                </Box>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> Nielimitowana lista gości{' '}
                </Box>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> Promocje u naszych partnerów{' '}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card style={styles.card}>
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <CardHeader
              avatar={<img src={logoprzed} alt="Logo WeddingPlanner" height="70px" />}
              title="39zł/ miesiąc"
              subheader="PREMIUM"
              style={styles.text2}
            />
          </Box>
          <Divider />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <Box style={styles.text}>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> Nielimitowana ilość stworzonych projektów zaproszeń{' '}
                </Box>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> Wiele motywów ślubu do wyboru
                </Box>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> 500MB miejsca na serwerze na utworzenie galerii zdjęć ze ślubu{' '}
                </Box>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> Nielimitowana lista gości{' '}
                </Box>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> Promocje u naszych partnerów{' '}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card style={styles.card}>
          <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
            <CardHeader title="0zł/ miesiąc" subheader="DARMOWY" style={styles.text2} />
          </Box>
          <Divider />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
              <Box style={styles.text}>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> 3 Projekty zaproszenia{' '}
                </Box>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> 3 Motywy ślubu do wyboru{' '}
                </Box>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> Nielimitowana lista gości{' '}
                </Box>
                <Box>
                  {' '}
                  <LibraryAddCheckIcon /> Powiadomienia o potwierdzeniu przybycia{' '}
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default PlanSection;
