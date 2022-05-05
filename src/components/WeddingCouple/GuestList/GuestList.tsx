import GuestCard from "./GuestCard";
import { Box, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  margin: "6rem 12rem 6rem 6rem",
  [theme.breakpoints.down('md')]: {
    margin: "2rem 3rem 2rem 2rem",
    padding:'0.5rem',
      '& .MuiSvgIcon-root': {
        fontSize: '1rem',
      },
      '& .MuiTypography-root': {
        fontSize: '0.9rem',
      },
  },
}));



const GuestList = () => {
  return (
    <StyledBox>
      <GuestCard title='Goście Pana Młodego'/>
      <GuestCard title='Goście Panny Młodej'/>
    </StyledBox>
    
  )
}

export default GuestList