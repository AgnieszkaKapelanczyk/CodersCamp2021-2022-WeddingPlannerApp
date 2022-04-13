import { Box, Card } from "@material-ui/core"
import DateOfWedding from "./DateOfWedding"
import ProgressOfPreparations from "./ProgressOfPreparations"
import TypeOfWedding from "./TypeOfWedding"

const WeddingCeremony = () => {
  return (
    <Box display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'} style={{margin:'6rem 12rem 6rem 6rem'}}>
      <ProgressOfPreparations/>
      <DateOfWedding/>
      <TypeOfWedding/>
      <Card>Wybór świadków</Card>
    </Box>
  )
}

export default WeddingCeremony