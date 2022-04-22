import { Typography, makeStyles, CardHeader } from "@material-ui/core";
import { Box, Divider, IconButton } from "@mui/material";
import { theme } from "theme/theme"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Love from 'assets/img/loveCouple.jpg';

const useStyles = makeStyles({
  cardHeaderIcon: {
    color: theme.palette.tertiary.main,
    position: 'relative',
    top: '2px',
  },
  headerTitle: {
    color: theme.palette.tertiary.main,
  }
});

const PhotoWidget = () => {
  const classes = useStyles(theme);

  const PhotoArray = [Love, ]

  return (
    <>
      <CardHeader 
            title={<Typography className={classes.headerTitle}>Moje zdjęcia</Typography>}
            avatar={
              <CameraAltIcon className={classes.cardHeaderIcon}/>
            }
            action={
              <IconButton aria-label='settings'>
                  <MoreVertIcon className={classes.cardHeaderIcon}/>
              </IconButton>
              }>
          </CardHeader>
          <Divider style={{ height: "1px", backgroundColor: `${theme.palette.secondary.main}`}}/>
          <Box display={'flex'} justifyContent={'center'} style={{alignItems: 'center'}}>
          <img
            alt="love"
            src={Love}
            style={{
              alignSelf: 'center',
              margin: '0.6rem',
              maxHeight: '200px'
            }}
          />
          </Box>
    </>
  );
};

export default PhotoWidget;