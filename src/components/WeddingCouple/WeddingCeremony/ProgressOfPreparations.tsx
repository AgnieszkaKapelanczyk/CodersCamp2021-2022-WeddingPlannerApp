
import { Box, Card, CardContent, CardHeader, IconButton, Typography, Divider, IconButtonProps, styled, Collapse} from "@material-ui/core"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { CircularProgressWithLabel } from "./CircularProgress";
import { useState } from "react";

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



const ProgressOfPreparations = () => {

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{display:'flex', flexDirection:'column'}}>
      <CardHeader 
         avatar={
          <BubbleChartIcon/>
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
        title="Postęp przygotowań ceremonii ślubnej"
      />
      <Divider/>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent style={{display:'flex', justifyContent:'center'}}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} style={{marginLeft:'5rem'}}>
          <Typography variant="h3">GRATULACJE!</Typography>
          <Typography variant="body1" style={{paddingTop:'1rem'}}>Wasz postęp przygotowań ceremonii <br/>ślubnej wynosi 75%.
            Wypełnij wszystkie <br/>pola w tej zakładce, aby uzyskać 100%.</Typography>
        </Box>
        <Box style={{marginLeft:'5rem'}}>
          <CircularProgressWithLabel value={75} fontSize={"large"} />
        </Box>
      </CardContent>
      </Collapse>
    </Card>
  )
}

export default ProgressOfPreparations