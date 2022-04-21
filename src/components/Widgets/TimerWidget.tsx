import { Box, Typography, makeStyles, CardHeader } from "@material-ui/core";
import { CardContent, Divider, IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import { theme } from "../../theme/theme";
import TimerIcon from '@mui/icons-material/Timer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ReactNode, useEffect, useRef, useState } from "react";
import { Breakpoint, getDeviceConfig } from "common/Breakpoints/getDeviceConfig";

const useStyles = makeStyles({
  timerNumber: {
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
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint | undefined>(undefined);
  const [currentCardHeight, setHeight] = useState<number>(0);
  const [currentCardWidth, setWidth] = useState<number>(0);
  const [isCardResize, setResize] = useState<boolean>(false);
  const [currentFontSize, setFontSize] = useState<string>('2.5em');
  const [content, setContent] = useState<ReactNode>(null);

  const TimerNumbers: TimerNumber = {
    days: '365',
    hours: '08',
    minutes: '25',
    seconds: '59',
  };
  
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newBreakpoint= getDeviceConfig(window.innerWidth);
        setCurrentBreakpoint(newBreakpoint);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
    
  }, [currentBreakpoint]);

  useEffect(() => {
      if (targetRef.current){
        const newWidth: number = targetRef.current.clientWidth;
        const newHeight: number =  targetRef.current.clientHeight;
        console.log(targetRef.current.clientHeight+ "x" + targetRef.current.clientWidth)
        setWidth(newWidth);
        setHeight(newHeight);
        setResize(true);
      }
  },[currentCardHeight,currentCardWidth]);

  useEffect(()=> {
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
        action={
        <IconButton aria-label='settings'>
            <MoreVertIcon className={classes.cardHeaderIcon}/>
        </IconButton>
        }>
    </CardHeader>
    <Divider/>
    <CardContent style={{textAlign: 'center'}}>
      <Typography variant="body2">
        Do dnia, w którym zostaniemy małżeństwem pozostało:
      </Typography>
      <StyledBox>
      <Box alignSelf={'center'} textAlign={'center'}>
            <Typography className={classes.timerNumber} style={{fontSize: currentFontSize}}>{TimerNumbers.days}</Typography>
            <Typography variant="body2" style={{margin:"0.4rem 0"}}>DNI</Typography>
          </Box>
          <Box alignSelf={'center'} textAlign={'center'}>
            <Typography className={classes.timerNumber} style={{fontSize: currentFontSize}}>{TimerNumbers.hours}</Typography>
            <Typography variant="body2" style={{margin:"0.4rem 0"}}>DNI</Typography>
          </Box>
            <Box alignSelf={'center'} textAlign={'center'}>
            <Typography className={classes.timerNumber} style={{fontSize: currentFontSize}}>{TimerNumbers.minutes}</Typography>
            <Typography variant="body2" style={{margin:"0.4rem 0"}}>DNI</Typography>
          </Box>
          <Box alignSelf={'center'} textAlign={'center'}>
            <Typography className={classes.timerNumber} style={{fontSize: currentFontSize}}>{TimerNumbers.seconds}</Typography>
            <Typography variant="body2" style={{margin:"0.4rem 0"}}>DNI</Typography>
          </Box>
      </StyledBox>
    </CardContent>
    </div>
  );
};

export default TimerWidget;