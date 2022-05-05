import EditIcon from '@mui/icons-material/Edit';
import { Card, CardContent, CardHeader, IconButton, Typography, Divider, Collapse, styled, IconButtonProps } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { theme } from '../../../../theme/theme';
import {makeStyles} from '@material-ui/core';
import InsideCardContent from './InsideCardContent';
import {ReactComponent as Cross} from '../../../../assets/icon/cross.svg';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

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

const TypeOfWedding = () => {

  const [expanded, setExpanded] = useState(false);
  const classes = useStyles(theme);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={{display:'flex', flexDirection:'column', marginTop:'2rem'}}>
      <CardHeader
         avatar={
          <EditIcon className={classes.cardHeaderIcon}/>
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
        title={<Typography className={classes.headerTitle}>Rodzaj ślubu</Typography>}
      />
      <Divider/>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent style={{display:'flex', flexDirection:'column'}}>
        <Typography variant="body1" style={{margin:'0 0 2rem 2rem'}}>Wybierz charakter uroczystości:</Typography>
        <InsideCardContent title="KONKORDATOWY" children={<Cross fill='#6F59C9' style={{width:'3rem', margin:'0 0 1rem 0'}}/>}/>
        <InsideCardContent title="CYWILNY" children={<EmojiFlagsIcon style= {{fontSize: '5rem', margin:'0 0 1rem 0', color:'#6F59C9'}}/>}/>
      </CardContent>
      </Collapse>
    </Card>
  )
}

export default TypeOfWedding