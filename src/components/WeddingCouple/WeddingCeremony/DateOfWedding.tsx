import { Box, Card, CardContent, CardHeader, IconButton, Typography } from "@material-ui/core"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const DateOfWedding = () => {
  return (
    <Card style={{display:'flex', flexDirection:'column', marginTop:'2rem'}}>
      <CardHeader
         avatar={
          <CalendarTodayIcon/>
        }
        action={
          <IconButton
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </IconButton>
        }
        title="Data ceremonii ślubnej"
      />
      <CardContent style={{display:'flex', justifyContent:'center'}}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} style={{marginLeft:'5rem'}}>
          <Typography variant="body1">Wybierz datę ceremonii ślubnej</Typography>
          <Typography variant="body1" style={{paddingTop:'1rem'}}>Podaj godzinę:</Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} style={{marginLeft:'5rem'}}>
            <Typography variant="body1">Wasz ślub odbędzie się:</Typography>
            <Typography variant="body1" style={{paddingTop:'1rem'}}>Data</Typography>
            <Typography variant="body1" style={{paddingTop:'1rem'}}>Do dnia, w którym zostaniecie Małżeństwem pozostało:</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default DateOfWedding