import {  Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "store/loginSlice";
import { closeDialog } from "../../store/dialogSlice";

export const Wyloguj = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"space-between"  }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
                dispatch(closeDialog())
            dispatch(logout())}
            }>
            Wyloguj
          </Button>
      </Box>
   
  )
}

export default Wyloguj;