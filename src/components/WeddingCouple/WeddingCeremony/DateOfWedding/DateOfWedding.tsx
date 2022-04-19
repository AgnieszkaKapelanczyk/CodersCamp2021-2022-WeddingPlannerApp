import { Box, Card, CardContent, CardHeader, IconButton, Typography, Divider, IconButtonProps, Collapse, styled} from "@mui/material"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import CustomTimePicker from '../DateOfWedding/CustomTimePicker';
import DatePicker from '../DateOfWedding/DatePicker';
import { theme } from 'theme/theme';
import {makeStyles} from '@material-ui/core';
import { useSelector } from "react-redux";
import {pickDateOfWedding} from '../../../../store/dateOfWeddingSlice';
import {pickTimeOfWedding} from '../../../../store/timeOfWeddingSlice';
import Timer from '../../WeddingCeremony/DateOfWedding/Timer'
import moment from 'moment';
import 'moment/locale/pl'  
moment.locale('pl')


const useStyles = makeStyles({
  cardHeaderIcon: {
    color: theme.palette.tertiary.main,
  },
  headerTitle: {
    color: theme.palette.tertiary.main,
  },
  typoTitle: {
    color: theme.palette.tertiary.main,
  }
});

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})
(({expand}:ExpandMoreProps) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
}));



const DateOfWedding = () => {

  const [expanded, setExpanded] = useState(false);
  const classes = useStyles(theme);
  const dateOfWedding = useSelector(pickDateOfWedding)
  const timeOfWedding = useSelector(pickTimeOfWedding) 

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{display:'flex', flexDirection:'column', marginTop:'2rem'}}>
      <CardHeader
         avatar={
          <CalendarTodayIcon className={classes.cardHeaderIcon}/>
        }
        action={
          <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        }
        title={<Typography className={classes.headerTitle}>Data ceremonii ślubnej</Typography>}
      />
      <Divider/>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent style={{display:'flex', justifyContent:'center', marginTop:'2rem'}}>
        <Box style={{ display:'flex', justifyContent:'center', flexDirection:'column'}}>
          <Box style={{ display:'flex', justifyContent:'center'}}>
            <Typography variant="body2">Wybierz datę ceremonii ślubnej</Typography>
          </Box>
          <DatePicker/>
          <Box style={{display:'flex'}}>
            <Typography variant="body2" style={{padding:'0 2rem'}}>Podaj godzinę:</Typography>
            <CustomTimePicker />  
          </Box>
        </Box>
        <Box>
            <Typography variant="body2">Wasz ślub odbędzie się:</Typography>
            <Typography variant="h3" className={classes.typoTitle} style={{paddingTop:'1rem'}}>{`${moment(dateOfWedding).format("dddd DD-MM-YYYY")} o godzinie ${moment(timeOfWedding).format("HH:mm")}`}</Typography>
            <Timer/>
        </Box>
      </CardContent>
      </Collapse>
    </Card>
  )
}

export default DateOfWedding