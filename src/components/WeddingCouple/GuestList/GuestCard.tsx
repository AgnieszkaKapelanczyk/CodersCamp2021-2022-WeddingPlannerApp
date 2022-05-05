import { Card, CardHeader, CardContent, Typography, Divider, styled} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { theme } from 'theme/theme';
import {makeStyles } from '@material-ui/core';
import TableOfGuests from './TableOfGuests'

const useStyles = makeStyles({
    cardHeaderIcon: {
      color: theme.palette.tertiary.main,
    },
  });

  
const StyledCard = styled(Card)(({ theme }) => ({
    display:'flex', 
    flexDirection:'column', 
    marginTop:'2rem',
    '& .MuiDivider-root': {
        backgroundColor: '#FEC5BB',
      },
    '& .MuiCardHeader-content': {
        color: '#6F59C9',
      },
  }));

const GuestCard = (props:{title:string}) => {

    const classes = useStyles(theme);

  return (
    <StyledCard>
        <CardHeader
            action={
            <MoreVertIcon className={classes.cardHeaderIcon}/>
            }
            title={<Typography>{props.title}</Typography>}
        />
        <Divider/>
        <CardContent>
          <TableOfGuests/>
        </CardContent>
    </StyledCard>
  )
}

export default GuestCard