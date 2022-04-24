import { Typography, Button, Box } from "@mui/material";
import { closeDialog } from "store/dialogSlice";
import { useAppDispatch } from "store/hooks";
import Logo from 'assets/img/logo_przed_zalogowaniem.png';

export const Zalogowano = () => {
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"space-between"  }}>
      <Box display={'flex'} justifyContent={'center'}>
        <img src={Logo} alt='' width={'100px'}/>
      </Box>
      <Box sx={{marginTop:'20px', marginBottom:'20px'}}>
          <Typography
            variant="body1"
            align="center"
            marginBottom="2rem">
            Jesteś zalogowany!
          </Typography>
      </Box>
      <Box
        sx={{ padding:'1rem', textAlign:"center" }}
        >
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => dispatch(closeDialog())}>
            ZACZYNAMY!
          </Button>
      </Box>
    </Box>
  )
}

export default Zalogowano;