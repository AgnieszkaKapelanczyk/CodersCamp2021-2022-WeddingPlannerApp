import { Card, CardHeader, CardContent, Typography, Divider, styled, Button, Box} from "@mui/material";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import GiftItem from "./GiftItem";

const StyledBox = styled(Box)(({ theme }) => ({
  margin: "6rem 12rem 6rem 6rem",
  [theme.breakpoints.down('md')]: {
    margin: "2rem 3rem 2rem 2rem",
  }
})
)

const StyledCard = styled(Card)(({ theme }) => ({
  display:'flex', 
  flexDirection:'column', 
  '& .MuiDivider-root': {
      backgroundColor: '#6F59C9',
    },
  '& .MuiCardHeader-content': {
      color: '#6F59C9',
    },
    
}));

const GiftList = () => {
  return (
    <StyledBox>
      <Button variant="contained" style={{color:'#fff', backgroundColor:'#6F59C9', marginBottom:'1.5rem'}} startIcon={<AddCircleIcon/>}>DODAJ PREZENT</Button>
      <StyledCard>
      <CardHeader
          avatar={
            <CardGiftcardIcon style={{color:'#6F59C9'}}/>
          }
          action={
          <MoreHorizIcon style={{color:"#6F59C9"}}/>
          }
          title={<Typography>MOJA LISTA PREZENTÓW</Typography>}
      />
      <Divider/>
      <CardContent style={{padding:'0'}} >
        <GiftItem/>
      </CardContent>
  </StyledCard>
</StyledBox>
  )
}

export default GiftList