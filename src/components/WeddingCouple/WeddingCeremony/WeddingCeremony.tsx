import { Box } from "@material-ui/core"
import ChoosingOfBestManAndBridesmaid from "./ChoosingOfBestManAndBridesmaid"
import DateOfWedding from "./DateOfWedding"
import ProgressOfPreparations from "./ProgressOfPreparations"
import TypeOfWedding from "./TypeOfWedding"

const WeddingCeremony = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} style={{margin:'6rem 12rem 6rem 6rem'}}>
      <ProgressOfPreparations/>
      <DateOfWedding/>
      <TypeOfWedding/>
      <ChoosingOfBestManAndBridesmaid/>
    </Box>
  )
}

export default WeddingCeremony