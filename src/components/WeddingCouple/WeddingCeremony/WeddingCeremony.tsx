import { Box } from "@mui/material";
import ChoosingOfBestManAndBridesmaid from "./ChoosingOfBestManAndBridesmaid";
import DateOfWedding from "./DateOfWedding/DateOfWedding";
import ProgressOfPreparations from "./ProgressOfPreparations/ProgressOfPreparations";
import TypeOfWedding from "./TypeOfWedding";

const WeddingCeremony = () => {
  return (
    <Box style={{margin:'6rem 12rem 6rem 6rem'}}>
      <ProgressOfPreparations/>
      <DateOfWedding/>
      <TypeOfWedding/>
      <ChoosingOfBestManAndBridesmaid/>
    </Box>
  )
}

export default WeddingCeremony