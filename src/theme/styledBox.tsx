import {Box, styled} from '@mui/material';

const StyledBox1 = styled(Box)(({ theme }) =>({
    display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"header header header header header header"
          "leftBar main main main main main"`,
  
    [theme.breakpoints.down('sm')]: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto',
      gridTemplateAreas: `"header " " main"`
    },
  }))

  const StyledBox2 = styled(Box)(({ theme }) =>({
    display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto',
            gridTemplateAreas: `"header "
          "main "
          "footer "`
  }))

  function StyledBox(loggedIn:boolean) {
    let StyledBox
    StyledBox= loggedIn? StyledBox1 : StyledBox2
    return (
      StyledBox
    )
  }
  export default StyledBox;