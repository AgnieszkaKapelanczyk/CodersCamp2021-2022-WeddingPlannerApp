import { Box, CardContent, CardHeader, Divider, IconButton, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { theme } from "../../theme/theme";
import TimerIcon from '@mui/icons-material/Timer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect, useRef, useState } from "react";
import { getDeviceConfig } from "common/Breakpoints/getDeviceConfig";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  timerNumbers: {
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
  justifyContent: 'center',
}));

interface TimerNumber {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const TimerWidget = () => {
  const classes = useStyles(theme);
  const targetRef = useRef<HTMLDivElement>(null);
  const [currentCardHeight, setHeight] = useState<number>(0);
  const [currentCardWidth, setWidth] = useState<number>(0);
  const [isCardResize, setResize] = useState<boolean>(false);
  const [currentFontSize, setFontSize] = useState<string>('2.5em');

  const TimerNumbers: TimerNumber = {
    days: '365',
    hours: '08',
    minutes: '25',
    seconds: '59',
  };

  useEffect(() => {
      if (targetRef.current){
        const newWidth: number = targetRef.current.clientWidth;
        const newHeight: number =  targetRef.current.clientHeight;
        setWidth(newWidth);
        setHeight(newHeight);
        setResize(true);
      }
  },[currentCardHeight,currentCardWidth]);

  useEffect(()=> {
    const currentBreakpoint= getDeviceConfig(window.innerWidth);
      if (isCardResize && currentCardWidth > 565 && currentCardWidth < 880){
        setFontSize('5em');
      } else if (isCardResize && currentCardWidth > 880 && currentBreakpoint === 'md') {
        setFontSize('4em');
      }

  },[isCardResize, currentCardHeight, currentCardWidth]);


  return (
    <div ref={targetRef}>
    <CardHeader 
        title={<Typography className={classes.headerTitle}>Odliczanie</Typography>}
        avatar={
        <TimerIcon className={classes.cardHeaderIcon}/>
        }
        /*action={
            <IconButton aria-label='settings'>
                <MoreVertIcon className={classes.cardHeaderIcon}/>
            </IconButton>
            }*/>
    </CardHeader>
    <Divider style={{ height: "1px", backgroundColor: `${theme.palette.secondary.main}`}}/>
    <CardContent style={{textAlign: 'center'}}>
      <Typography variant="body2">
        Do dnia, w którym zostaniemy małżeństwem pozostało:
      </Typography>
      <StyledBox>
      <Box alignSelf={'center'} textAlign={'center'}>
            <Typography className={classes.timerNumbers} style={{fontSize: currentFontSize}}>{TimerNumbers.days}</Typography>
            <Typography variant="body2" style={{margin:"0.4rem 0"}}>DNI</Typography>
          </Box>
          <Box alignSelf={'center'} textAlign={'center'}>
            <Typography className={classes.timerNumbers} style={{fontSize: currentFontSize}}>{TimerNumbers.hours}</Typography>
            <Typography variant="body2" style={{margin:"0.4rem 0"}}>DNI</Typography>
          </Box>
            <Box alignSelf={'center'} textAlign={'center'}>
            <Typography className={classes.timerNumbers} style={{fontSize: currentFontSize}}>{TimerNumbers.minutes}</Typography>
            <Typography variant="body2" style={{margin:"0.4rem 0"}}>DNI</Typography>
          </Box>
          <Box alignSelf={'center'} textAlign={'center'}>
            <Typography className={classes.timerNumbers} style={{fontSize: currentFontSize}}>{TimerNumbers.seconds}</Typography>
            <Typography variant="body2" style={{margin:"0.4rem 0"}}>DNI</Typography>
          </Box>
      </StyledBox>
    </CardContent>
    </div>
  );
};

export default TimerWidget;