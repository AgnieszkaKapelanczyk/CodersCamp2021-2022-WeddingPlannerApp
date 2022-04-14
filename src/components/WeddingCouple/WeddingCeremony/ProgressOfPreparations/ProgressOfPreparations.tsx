
import { Box, CardContent, Typography, Collapse} from "@mui/material"
import { Card, CardHeader, Divider } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { CircularProgressWithLabel } from '../ProgressOfPreparations/CircularProgress';
import { useState } from "react";
import { theme } from '../../../../theme/theme';
import {makeStyles} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

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



const ProgressOfPreparations = () => {

  const classes = useStyles(theme);

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{display:'flex', flexDirection:'column'}}>
      <CardHeader
        title={<Typography className={classes.headerTitle}>Postęp przygotowań ceremonii ślubnej</Typography>}
         avatar={
          <BubbleChartIcon className={classes.cardHeaderIcon}/>
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
        
      />
      <Divider style={{backgroundColor:'secondary'}}/>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'3rem'}}>
        <Box>
          <Typography variant="h3" className={classes.typoTitle}>GRATULACJE!</Typography>
          <Typography variant="body1" style={{paddingTop:'1rem'}}>Wasz postęp przygotowań ceremonii <br/>ślubnej wynosi 75%.
            Wypełnij wszystkie <br/>pola w tej zakładce, aby uzyskać 100%.</Typography>
        </Box>
        <Box style={{marginLeft:'3rem'}}>
          <CircularProgressWithLabel value={75} />
        </Box>
      </CardContent>
      </Collapse>
    </Card>
  )
}

export default ProgressOfPreparations