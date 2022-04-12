import { useDispatch, useSelector,  RootStateOrAny } from "react-redux";
import { Dialog, DialogTitle, DialogContent, Box, Typography, Divider, IconButton } from '@material-ui/core'
import { closeDialog } from "../../store/dialogSlice"
import { getDialogEl } from "./dialog.utils";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@mui/icons-material/Person';

const useStyles = makeStyles({
  customizedButton: {
    position: 'absolute',
    marginLeft: '85%',
  },
  icon:{
      color:"#C26D6D",
      fontSize:"large",
      marginRight: '10px'
  }
});


const Dialogs = () => {
  const classes = useStyles();
  const { isOpen, formType } = useSelector((state:  RootStateOrAny) => state.dialog);

  const dispatch = useDispatch();
  if (!formType) return null;
  const { title , component, width }: typeof formType  = getDialogEl(formType);


  return(
    <Dialog open={isOpen} maxWidth={width} fullWidth>
      {title && (
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
                <PersonIcon
                className={classes.icon}
                >
                </PersonIcon>
              <Typography
                variant="h2"
                color="primary">
                {title}
              </Typography>
              <IconButton
                className={classes.customizedButton}
                color="primary"
                size="small"
                onClick={() => dispatch(closeDialog())}>
                <CancelOutlinedIcon  />
              </IconButton>
          </Box>
        </DialogTitle>
      )}
      <Divider
        variant="fullWidth"/>
      <DialogContent>{component}</DialogContent>
    </Dialog>
  );
};

export default Dialogs;