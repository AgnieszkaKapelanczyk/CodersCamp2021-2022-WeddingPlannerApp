import { Box, Button, Checkbox, Typography, styled} from "@mui/material"
import SocialBar from "./SocialBar"
import Avatar from '../../../../assets/img/malecka_avatar.jpg';

const StyledBox = styled(Box)(({ theme }) => ({
  display:'flex', 
  backgroundColor:'#F8EDEB',
  padding:'1rem',
  [theme.breakpoints.down('lg')]: {
  flexDirection:'column',
  justifyContent:''
  },
}));


const AfterChoosing = (props:{title:string,name:string}) => {
    

  return (
    <Box style={{margin:'0rem 2rem 2rem 2rem'}}>
      <Typography style={{marginBottom:'1rem'}}>{props.title}</Typography>
      <StyledBox>
        <img src={Avatar} height={'150px'} alt="" style={{ width: '150px', borderRadius: '5%', marginRight:'1rem'}}/>
        <Box style={{flexGrow: 2, margin:'0 1rem 1rem 0'}}>
          <SocialBar/>
          <Typography variant="h3" style={{margin:'0.5rem 0 1rem 0'}}>{props.name}</Typography>
          <Button variant="contained" style={{backgroundColor:'#FEC5BB', color:'#fff',fontFamily: "Lato",fontWeight: 500,padding: '0.6rem 1rem'}}>ZMIEŃ WYBÓR</Button>
        </Box>
        <Box style={{marginRight:'2rem'}}>
          <Typography>Uprawnienia Świadka:</Typography>
          <Typography><Checkbox style={{color:'#6F59C9'}}/>Przeglądanie Listy Gości</Typography>
          <Typography><Checkbox style={{color:'#6F59C9'}}/>Tworzenie grup wśród Gości</Typography>
          <Typography><Checkbox style={{color:'#6F59C9'}}/>Przeglądanie kto zarezerwował dany prezent</Typography>
        </Box>
      </StyledBox>
    </Box>

  )
}

export default AfterChoosing