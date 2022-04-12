import { Typography, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeDialog } from "../../store/dialogSlice";

export const Zalogowano = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Box
        sx={{ marginTop: 20 }}>
          <Typography
            variant="body1"
            align="center">
            Jesteś zalogowany!
          </Typography>
      </Box>
      <Box
        sx={{ marginTop: 35, marginBottom: 25 }}
        textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => dispatch(closeDialog())}>
            ZACZYNAMY!
          </Button>
      </Box>
    </>
  )
}

export default Zalogowano;