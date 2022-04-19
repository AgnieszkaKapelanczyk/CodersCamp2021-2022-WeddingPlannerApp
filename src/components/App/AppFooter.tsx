import { Typography} from "@mui/material";
import {Box, Link} from '@mui/material';
import codersLogo from 'assets/img/coder-camp.svg';
import gitLogo from 'assets/img/githubLogo.png';

const AppFooter = () => {
  return (
    <footer style={{backgroundColor: '#F8EDEB', position:'static'}}>
      <Box sx={{display:"flex", justifyContent:"space-between" ,alignItems:"flex-end", height:"8rem"}}>
      <Box sx={{display:"flex", justifyContent:"flex-start" , alignItems:"center", margin:'10px'}}>

      <Typography  paddingLeft='25px' paddingRight='20px' paragraph >Projekt został zrealizowany w ramach:</Typography>
      <Link href='https://www.coderscamp.edu.pl/' >
      <img alt='' src={codersLogo} height="20px" style={{ position:'relative', top:'2px'}} />
      </Link>
      </Box>
      <Box sx={{padding:'20px', paddingRight:'30px'}}>
        <Link href='https://github.com/AgnieszkaKapelanczyk/CodersCamp2021-2022-WeddingPlannerApp'>
      <img alt='' src={gitLogo} height="14px" />
        </Link>
      </Box>
      </Box>
    </footer>
  )
}

export default AppFooter