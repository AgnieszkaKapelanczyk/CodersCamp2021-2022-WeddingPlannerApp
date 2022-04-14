import { Typography} from "@mui/material";
import {Box, Link} from '@mui/material';
import codersLogo from '../../assets/img/codersCampLogo-removebg-preview.png'
import gitLogo from '../../assets/img/githubLogo.png'

const AppFooter = () => {
  return (
    <footer style={{backgroundColor: '#F8EDEB', position:'static'}}>
      <Box sx={{display:"flex", justifyContent:"space-between" ,alignItems:"flex-end", height:"8rem"}}>
      <Box sx={{display:"flex", justifyContent:"flex-start" , alignItems:"flex-end", margin:'10px'}}>

      <Typography  paddingLeft='25px' paddingRight='20px' variant='body1' paragraph={true} >Projekt został zrealizowany w ramach:</Typography>
      <Link href='https://www.coderscamp.edu.pl/'>
      <img alt='' src={codersLogo} height="35px" />
      </Link>
      </Box>
      <Box sx={{padding:'20px', paddingRight:'30px'}}>
        <Link href='https://github.com/AgnieszkaKapelanczyk/CodersCamp2021-2022-WeddingPlannerApp'>
      <img alt='' src={gitLogo} height="20px" />
        </Link>
      </Box>
      </Box>
    </footer>
  )
}

export default AppFooter