import { Box, Button, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const BeforeChoosing = (props:{title:string}) => {
  return (
    <Box style={{margin:'0 2rem 0 2rem'}}>
        <Typography style={{marginBottom:'1rem'}}>{props.title}</Typography>
        <Box style={{display:'flex', backgroundColor:'#F8EDEB', padding:'1rem'}}>
            <Box style={{display:'flex'}}>
                <PersonIcon style= {{fontSize: '4.5rem', borderRadius: '5%', background: '#BAAAFB', padding:'2rem', color:'#fff'}}/>
                <Box style={{display:'flex', flexDirection:'column', marginLeft:'1rem', justifyContent:'start'}}>
                    <Typography style={{margin:'0.5rem 0 1rem 0'}}>Nie wybrano</Typography>
                    <Button variant="contained" style={{backgroundColor:'#6F59C9', color:'#fff',fontFamily: "Lato",fontWeight: 500,padding: '0.6rem 1rem'}}>WYBIERZ ŚWIADKA</Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default BeforeChoosing