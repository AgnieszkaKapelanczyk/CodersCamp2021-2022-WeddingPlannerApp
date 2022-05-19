import { Box, styled} from "@mui/material";
import ChoosingOfBestManAndBridesmaid from "./ChoosingOfBestManAndBridesmaid/ChoosingOfBestManAndBridesmaid";
import DateOfWedding from "./DateOfWedding/DateOfWedding";
import ProgressOfPreparations from "./ProgressOfPreparations/ProgressOfPreparations";
import TypeOfWedding from "./TypeOfWedding/TypeOfWedding";


const StyledBox = styled(Box)(({ theme }) => ({
  margin:'1.5rem',
  [theme.breakpoints.down('md')]: {
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