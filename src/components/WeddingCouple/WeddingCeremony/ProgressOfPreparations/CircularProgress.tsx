import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import {Box, styled} from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
   display: 'inline-flex',
   '& .MuiCircularProgress-svg': {
    width:'95px',
    height:'95px',
  },
  
  [theme.breakpoints.down('md')]: {
      '& .MuiCircularProgress-svg': {
        width:'45px',
        height:'45px',
      },
  },
}));


export function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <StyledBox>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          fontSize={'2rem'}
          variant="h2"
          component="div"
          color="secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </StyledBox>
  );
}


