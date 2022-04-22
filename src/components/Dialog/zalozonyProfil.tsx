import { Typography, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeDialog } from "../../store/dialogSlice";
import { useNavigate } from "react-router-dom";

export const ZalozonyProfil = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate();

  return (
    <Box sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"space-between"  }}>
      <Box sx={{marginTop:'20px', marginBottom:'20px'}}>
          <Typography
            variant="body1"
            align="center">
            Założyłeś profil!
          </Typography>
      </Box>
      <Box
        sx={{ marginBottom: '20px', textAlign:'center' }}
        >
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {dispatch(closeDialog())
            navigate('/StartPlanning')}}>
            ZACZYNAMY!
          </Button>
      </Box>
    </Box>
  )
}

export default ZalozonyProfil;