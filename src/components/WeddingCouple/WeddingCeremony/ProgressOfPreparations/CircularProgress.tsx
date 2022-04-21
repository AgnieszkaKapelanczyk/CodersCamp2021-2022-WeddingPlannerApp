import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import {Box, styled} from '@mui/material';

const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
   display: 'inline-flex',
   '& .MuiTypography-root': {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiTypography-root': {
      fontSize: '2rem',
    },
  },
}));


export function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <StyledBox>
      <CircularProgress style={{width:'80px', height:'80px'}} variant="determinate" {...props} />
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
          variant="h2"
          component="div"
          color="secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </StyledBox>
  );
}


