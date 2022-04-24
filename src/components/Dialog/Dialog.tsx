import { useDispatch, useSelector,  RootStateOrAny } from "react-redux";
import { Dialog, DialogTitle, DialogContent, Box, Typography, Divider, IconButton } from '@mui/material'
import { closeDialog } from "../../store/dialogSlice"
import { getDialogEl } from "./dialog.utils";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PersonIcon from '@mui/icons-material/Person';

const Dialogs = () => {
  const { isOpen, formType } = useSelector((state:  RootStateOrAny) => state.dialog);
  const dispatch = useDispatch();
  
  if (!formType) return null;
  const { title , component, width }: typeof formType  = getDialogEl(formType);

  return(
    <Dialog open={isOpen} maxWidth={width} fullWidth>
      {title && (
        <DialogTitle>
          <Box sx={{display:"flex",
            justifyContent:"center",
            alignItems:"center"}}
            >
                <PersonIcon
                sx={{
                  color:"#C26D6D",
                  fontSize: '2rem',
                  marginRight: '10px'
                }}  
                >
                </PersonIcon>
              <Typography
                variant="h3"
                color="primary">
                {title}
              </Typography>
              <IconButton
                sx={{
                  position: 'absolute',
                  marginLeft: '85%'
                }}
                color="primary"
                size="small"
                onClick={() => dispatch(closeDialog())}>
                <CancelOutlinedIcon />
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