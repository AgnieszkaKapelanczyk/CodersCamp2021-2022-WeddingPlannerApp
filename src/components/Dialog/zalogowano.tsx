import { Typography, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeDialog } from "../../store/dialogSlice";

export const Zalogowano = () => {
  const dispatch = useDispatch();

  return (
    <Box sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"space-between"  }}>
      <Box sx={{marginTop:'20px', marginBottom:'20px'}}>
          <Typography
            variant="body1"
            align="center">
            Jesteś zalogowany!
          </Typography>
      </Box>
      <Box
        sx={{ marginBottom:'20px', textAlign:"center" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(closeDialog())}>
            ZACZYNAMY!
          </Button>
      </Box>
    </Box>
  )
}

export default Zalogowano;