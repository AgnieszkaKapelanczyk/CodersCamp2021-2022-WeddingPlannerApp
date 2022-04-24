import {  Button, Box, Typography } from "@mui/material";
import { useAppDispatch } from "store/hooks";
import { logout } from "store/userSlice";
import { closeDialog } from "store/dialogSlice";

export const Wyloguj = () => {
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ display:"flex", flexDirection:"column", justifyContent: "center" , alignItems: 'center'}}>
          <Box sx={{margin:'2rem 1rem'}}>
            <Typography variant="body1" align={'center'} >Kończymy na dzisiaj. Naciśnij przycisk poniżej, aby się wylogować.</Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{width: '50%', marginBottom: '1rem'}}
            onClick={() => {
                dispatch(closeDialog());
                dispatch(logout());
              }
            }>
            Wyloguj
          </Button>
      </Box>
   
  )
}

export default Wyloguj;