import { Box, Typography, makeStyles, CardHeader } from "@material-ui/core";
import { CardContent, Divider, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import { theme } from "theme/theme";
import TimerIcon from '@mui/icons-material/Timer';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const useStyles = makeStyles({
  timerNumber: {
      fontSize: '2.5rem',
      backgroundColor: theme.palette.secondary.main,
      fontWeight: 700,
      color: 'white',
      borderRadius: '6px',
      padding: '0.6rem',
      lineHeight: 1,
      margin: '0 10px'
  },
  cardHeaderIcon: {
    color: theme.palette.tertiary.main,
    position: 'relative',
    top: '2px',
  },
  headerTitle: {
    color: theme.palette.tertiary.main,
  }
});

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  textAlign: 'center',
  alignSelf: 'center',
  margin: '1rem',
  justifyContent: 'space-evenly',
}));

const TimerWidget = () => {
  const classes = useStyles(theme);

  return (
    <>
    <CardHeader 
        title={<Typography className={classes.headerTitle}>Odliczanie</Typography>}
        avatar={
        <TimerIcon className={classes.cardHeaderIcon}/>
        }
        action={
        <IconButton aria-label='settings'>
            <MoreVertIcon className={classes.cardHeaderIcon}/>
        </IconButton>
        }>
    </CardHeader>
    <Divider/>
    <CardContent style={{textAlign: 'center', margin:'0.6rem 1rem'}}>
      <Typography variant="body2">
        Do dnia, w którym zostaniemy małżeństwem pozostało:
      </Typography>
      <StyledBox>
        <Box alignSelf={'center'} textAlign={'center'}>
          <Typography className={classes.timerNumber}>365</Typography>
          <Typography variant="body2" style={{margin:"0.4rem 0"}}>DNI</Typography>
        </Box>
        <Box alignSelf={'center'} textAlign={'center'}>
          <Typography className={classes.timerNumber}>08</Typography>
          <Typography variant="body2" style={{margin:"0.4rem 0"}}>GODZIN</Typography>
        </Box>
        <Box alignSelf={'center'} textAlign={'center'}>
          <Typography className={classes.timerNumber}>23</Typography>
          <Typography variant="body2" style={{margin:"0.4rem 0"}}>MINUT</Typography>
        </Box>
        <Box alignSelf={'center'} textAlign={'center'}>
          <Typography className={classes.timerNumber}>59</Typography>
          <Typography variant="body2" style={{margin:"0.4rem 0"}}>SEKUND</Typography>
        </Box>
      </StyledBox>
    </CardContent>
  </>
  );
};

export default TimerWidget;