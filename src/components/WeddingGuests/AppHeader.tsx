import { AppBar, Button, Typography, Box} from '@mui/material'
import Logoprzed from '../../assets/img/logo_przed_zalogowaniem.png'
import Logopo from '../../assets/img/logo_po_zalogowaniu.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch } from "react-redux";
import { openDialog, FormType } from '../../store/dialogSlice'
import { useNavigate } from 'react-router-dom';

 
 const iconStyle= ({
      color:"#C26D6D",
      size:"large",
  }
);

const LogoBox = ({
  height: "46px",
  cursor: "pointer",
  padding: "0.5rem 0",
  display:'flex',
});



// const Header = () => {
//   let navigate = useNavigate();
//   // let dispatch = useDispatch();
//   const matches = useMediaQuery('(min-width:600px)', { noSsr: true });
//   // const loggedIn = useSelector(selectIsLoggedIn);

let loggedIn=false

function GetLogo() {
  const navigate=useNavigate()
 
const names= 'Anna & Jakub'
  const logo = (
  <Box style={LogoBox}>
  <Button onClick={()=> navigate('/')}>
    <img alt='' src={loggedIn? Logopo : Logoprzed} height='50px'/>
  <Typography variant='h3' color='primary' style={{margin:'0.5rem'}}>{loggedIn? names : 'WeddingPlanner'}</Typography>
  </Button>
  </Box>
  )

  return logo}

  function GetRightSide(){
    let dispatch = useDispatch();
    let elementForNotLoggedIn= (
      <Box sx={{display:"flex"}}>
      <Button sx= {{variant:'text', color:'primary' }}  onClick={() =>dispatch(openDialog({ formType: FormType.rejestracjaEmail }))}>ZAREJESTRUJ SIĘ</Button>
      <Button sx={{variant:'text', color:'primary'}} style={{margin:'0.2rem',  fontSize:'0.9rem'}} onClick={() => dispatch(openDialog({ formType: FormType.loginDialog }))}>ZALOGUJ SIĘ</Button>
    </Box>
    )
    let elementForLoggedIn= (
      <Button >
        <AccountCircleIcon style={ iconStyle} />
      </Button>
    )
    const rightSide= loggedIn? elementForLoggedIn : elementForNotLoggedIn
    return rightSide
  }



const AppHeader = () => {
  
  return (
    
      <AppBar position='static' color='inherit'  >
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

