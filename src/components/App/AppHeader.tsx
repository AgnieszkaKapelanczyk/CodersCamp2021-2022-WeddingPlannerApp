import { AppBar, Button, Typography, Box} from '@mui/material'
import Logoprzed from 'assets/img/logo_przed_zalogowaniem.png'
import Logopo from 'assets/img/logo_po_zalogowaniu.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from "react-redux";
import { openDialog, FormType } from 'store/dialogSlice'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";
import { useSelector } from 'react-redux';
import { loggedInUser } from 'store/loginSlice';

 const iconStyle= ({
      color:"#C26D6D",
      size:"large",
  }
);

const LogoBox = ({
  height: "50px",
  cursor: "pointer",
  padding: "0.5rem 0",
  display:'flex',
});

function GetLogo() {
  const navigate=useNavigate()
  const loggedIn = useSelector(loggedInUser);
const names= 'Anna & Jakub'
  const LogoBig = (
  <Box style={LogoBox}>
  <Button onClick={()=> navigate('/')}>
    <img alt='' src={loggedIn? Logopo : Logoprzed} height='32px'/>
  <Typography variant='h3' color='primary' style={{margin:'0.5rem'}}>{loggedIn? names : 'WeddingPlanner'}</Typography>
 </Button>
  </Box>
  )

  const LogoSmall=(
    <Box >
  <Button onClick={()=> navigate('/')}>
    <img alt='' src={loggedIn? Logopo : Logoprzed} height='32px'/>
 </Button>
  </Box>
  )

  const matches = useMediaQuery('(min-width:500px)');
 
  const logo=(
    loggedIn? LogoBig:  matches ?  LogoBig :  LogoSmall
  )

  return logo}

  function GetRightSide(){
    const loggedIn = useSelector(loggedInUser);
    let dispatch = useDispatch();
    let elementForNotLoggedIn= (
      <Box sx={{display:"flex"}}>
      <Button sx= {{variant:'text', color:'primary' }} style={{margin:'0.2rem 0.5rem',  fontSize:'0.9rem'}} onClick={() =>dispatch(openDialog({ formType: FormType.rejestracjaEmail }))}>ZAREJESTRUJ SIĘ</Button>
      <Button sx={{variant:'text', color:'primary'}} style={{margin:'0.2rem 0.5rem',  fontSize:'0.9rem'}} onClick={() => dispatch(openDialog({ formType: FormType.loginDialog }))}>ZALOGUJ SIĘ</Button>
    </Box>
    )
    let elementForLoggedIn= (
      <Button >
        <AccountCircleIcon style={ iconStyle}
        onClick={()=>dispatch(openDialog({formType: FormType.wyloguj}))} />
      </Button>
    )
    const rightSide= loggedIn? elementForLoggedIn : elementForNotLoggedIn
    return rightSide
  }



const AppHeader = () => {
  
  return (
    
      <AppBar position='static' color='inherit' >
      <Box display={"flex"} flexDirection="row"> 
        {GetLogo()}
        <Box sx={{display:"flex", justifyContent:"flex-end", flexGrow:"1", gridColumnGap:"1rem"}}>
        {GetRightSide()}
       
      </Box>
      </Box>
      </AppBar>
      
    
  )
}

export default AppHeader;

