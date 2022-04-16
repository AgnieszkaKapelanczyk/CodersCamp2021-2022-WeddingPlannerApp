import { Box, Card, CardContent, CardHeader, IconButton, Typography, Divider, IconButtonProps, Collapse, styled} from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { theme } from '../../../theme/theme';
import {makeStyles} from '@material-ui/core';

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
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)'
}));


const ChoosingOfBestManAndBridesmaid = () => {
    const [expanded, setExpanded] = useState(false);
    const classes = useStyles(theme);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  

  return (
    <Card style={{display:'flex', flexDirection:'column', marginTop:'2rem'}}>
      <CardHeader 
         avatar={
          <PersonPinIcon className={classes.cardHeaderIcon}/>
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
        title={<Typography className={classes.headerTitle}>Wybór świadków</Typography>}
      />
      <Divider/>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent style={{display:'flex', justifyContent:'center'}}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} style={{marginLeft:'5rem'}}>
          <Typography variant="h3">GRATULACJE!</Typography>
        </Box>
        <Box style={{marginLeft:'5rem'}}>
        </Box>
      </CardContent>
      </Collapse>
    </Card>
  )
}

export default ChoosingOfBestManAndBridesmaid