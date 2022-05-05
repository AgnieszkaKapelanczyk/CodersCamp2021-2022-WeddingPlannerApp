import { CardHeader, Divider, IconButton, Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { Box } from "@mui/system";
import ProgressCircle from 'common/ProgressCircle/ProgressCircle';
import { makeStyles } from "@mui/styles";

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

const ProgressWidget = () => {
  const classes = useStyles(theme);

  return (
    <>
        <CardHeader
            title={<Typography className={classes.headerTitle}>Postęp przygotowań</Typography>}
            avatar={
              <BubbleChartIcon className={classes.cardHeaderIcon}/>
            }
            /*action={
            <IconButton aria-label='settings'>
                <MoreVertIcon className={classes.cardHeaderIcon}/>
            </IconButton>
            }*/>
          </CardHeader>
          <Divider style={{ height: "1px", backgroundColor: `${theme.palette.secondary.main}`}}/>
          <Box display={"flex"}>
            <ProgressCircle
              radius={ 60 }
              stroke={ 8 }
              progress={ 75 }
            />
            <Box style={{flex: '2'}}>
                <Typography variant="body2">Wasz postęp przygotowań do ślubu wynosi 75%.</Typography>
            </Box>
          </Box>
    </>
  );
};

export default ProgressWidget;