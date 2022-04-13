
import { Box, Card, CardContent, CardHeader, CircularProgress, IconButton,  Theme, Typography } from "@material-ui/core"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import { CircularProgressWithLabel } from "./CircularProgress";
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
//import { useState } from "react";

export interface MyProps { 
  theme: Theme; 
  expand: boolean
}
 

/*const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand}) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));*/


const ProgressOfPreparations = () => {

  //const [expanded, setExpanded] = useState(false);

  /*const handleExpandClick = () => {
    setExpanded(!expanded);
  };*/


  return (
    <Card style={{display:'flex', flexDirection:'column'}}>
      <CardHeader
         avatar={
          <BubbleChartIcon/>
        }
        action={
          <IconButton
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </IconButton>
        }
        title="Postęp przygotowań ceremonii ślubnej"
      />
      <CardContent style={{display:'flex', justifyContent:'center'}}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} style={{marginLeft:'5rem'}}>
          <Typography variant="h3">GRATULACJE!</Typography>
          <Typography variant="body1" style={{paddingTop:'1rem'}}>Wasz postęp przygotowań ceremonii <br/>ślubnej wynosi 75%.
            Wypełnij wszystkie <br/>pola w tej zakładce, aby uzyskać 100%.</Typography>
        </Box>
        <Box style={{marginLeft:'5rem'}}>
          <CircularProgress variant="determinate" value={75}/>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProgressOfPreparations