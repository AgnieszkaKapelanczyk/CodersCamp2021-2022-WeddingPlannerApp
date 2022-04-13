import { Typography} from "@mui/material";
import {Box, Link} from '@mui/material';
import codersLogo from '../../assets/img/codersCampLogo-removebg-preview.png'
import gitLogo from '../../assets/img/githubLogo.png'

const AppFooter = () => {
  return (
    <footer style={{backgroundColor: '#F8EDEB', position:'relative'}}>
      <Box sx={{display:"flex", justifyContent:"space-between" ,alignItems:"flex-end", height:"8rem"}}>
      <Box sx={{display:"flex", justifyContent:"flex-start" , alignItems:"flex-end", margin:'10px'}}>

      <Typography padding='15px' paddingLeft='25px'  variant='body1' paragraph={true} >Projekt został zrealizowany w ramach:</Typography>
      <Link href='https://www.coderscamp.edu.pl/'>
      <img src={codersLogo} height="60px" />
      </Link>
      </Box>
      <Box sx={{padding:'20px', paddingRight:'30px'}}>
        <Link href='https://github.com/AgnieszkaKapelanczyk/CodersCamp2021-2022-WeddingPlannerApp'>
      <img src={gitLogo} height="40px" />
        </Link>
      </Box>
      </Box>
    </footer>
  )
}

export default AppFooter