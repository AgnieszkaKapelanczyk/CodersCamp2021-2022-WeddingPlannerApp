import { Box, Typography, makeStyles } from "@material-ui/core";
import { CardContent } from "@mui/material";
import { styled } from '@mui/material/styles';
import { theme } from "../../../../theme/theme";
import { useSelector } from "react-redux";
import {pickDateOfWedding} from '../../../../store/dateOfWeddingSlice';
import {pickTimeOfWedding} from '../../../../store/timeOfWeddingSlice';
import moment from 'moment';
import 'moment/locale/pl'  
moment.locale('pl')


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
});

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  textAlign: 'center',
  alignSelf: 'center',
  margin: '1rem 1rem 1rem 0',
  padding:'0',
  justifyContent: 'space-evenly',
}));

const Timer = () => {
  const classes = useStyles(theme);
  const dateOfWedding = useSelector(pickDateOfWedding)
  const timeOfWedding = useSelector(pickTimeOfWedding) 

  let currentDay = moment().format();
  let givenDay = moment(dateOfWedding).format('YYYY-MM-DD');
  let givenTime = moment(timeOfWedding).format("HH:MM:SS");
  let dayAndTimeOfWedding = `${givenDay}T${givenTime}`;
  let dayAndTime = moment(dayAndTimeOfWedding)
  console.log(dayAndTime)
  let days = dayAndTime.diff(currentDay,'days')
  let hours = dayAndTime.diff(currentDay,'hours')-(days*24)
  let minutes = dayAndTime.diff(currentDay,'minutes')-(hours*60)-(days*1440)
  let seconds = dayAndTime.diff(currentDay,'seconds')-(hours*3600)-(days*86400)-(minutes*60)
 

  return (
    <>
    <CardContent style={{padding:'1rem 0 0 0'}}>
      <Typography variant="body2">
        Do dnia, w którym zostaniemy małżeństwem pozostało:
      </Typography>
      <StyledBox>
        <Box alignSelf={'center'} textAlign={'center'}>
          <Typography className={classes.timerNumber}>{days<=0?0:days}</Typography>
          <Typography variant="body2" style={{margin:"0.4rem 0"}}>DNI</Typography>
        </Box>
        <Box alignSelf={'center'} textAlign={'center'}>
          <Typography className={classes.timerNumber}>{hours<=0?0:hours
        }</Typography>
          <Typography variant="body2" style={{margin:"0.4rem 0"}}>GODZIN</Typography>
        </Box>
        <Box alignSelf={'center'} textAlign={'center'}>
          <Typography className={classes.timerNumber}>{minutes<=0?0:minutes}</Typography>
          <Typography variant="body2" style={{margin:"0.4rem 0"}}>MINUT</Typography>
        </Box>
        <Box alignSelf={'center'} textAlign={'center'}>
          <Typography className={classes.timerNumber}>{seconds<=0?0:seconds}</Typography>
          <Typography variant="body2" style={{margin:"0.4rem 0"}}>SEKUND</Typography>
        </Box>
      </StyledBox>
    </CardContent>
  </>
  );
};

export default Timer;