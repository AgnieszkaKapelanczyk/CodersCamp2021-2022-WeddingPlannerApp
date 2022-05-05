import { Box, styled } from "@mui/material";
import ChoosingOfBestManAndBridesmaid from "./ChoosingOfBestManAndBridesmaid";
import DateOfWedding from "./DateOfWedding/DateOfWedding";
import ProgressOfPreparations from "./ProgressOfPreparations/ProgressOfPreparations";
import TypeOfWedding from "./TypeOfWedding/TypeOfWedding";

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


const WeddingCeremony = () => {
  return (
    <StyledBox>
      <ProgressOfPreparations/>
      <DateOfWedding/>
      <TypeOfWedding/>
      <ChoosingOfBestManAndBridesmaid/>
    </StyledBox>
  )
}

export default WeddingCeremony