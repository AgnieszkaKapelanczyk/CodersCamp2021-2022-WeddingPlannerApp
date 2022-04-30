import { AppBar, Button, Typography, Box, styled, IconButton} from '@mui/material'
import Logoprzed from 'assets/img/logo_przed_zalogowaniem.png'
import Logopo from 'assets/img/logo_po_zalogowaniu.png'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { openDialog, FormType } from 'store/dialogSlice'
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from "@mui/material";
import {isLoggedIn, selectName} from 'store/userSlice';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { theme } from 'theme/theme';

 const iconStyle= ({
      color:"#C26D6D",
      fontSize: "2.8rem",
      marginRight: '0.2rem'
  }
);

const LogoBox = ({
  height: "50px",
  cursor: "pointer",
  padding: "0.5rem 0",
  display:'flex',
});

const StyledButton = styled(Button)(({ theme }) => ({
  margin: '0.66rem 1rem', 
  padding: '0 1.2rem' ,
  height: '70%',
  fontSize:'1rem', 
  fontWeight: '800',
    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
    }
}));

function GetLogo() {
  const navigate = useNavigate();
  const loggedIn = useAppSelector(isLoggedIn);
  const coupleNames = 'Anna & Jakub';
  
  const LogoBig = (
  
    <Box style={LogoBox}>
    <IconButton onClick={()=> loggedIn ? navigate('/WeddingCouple') : navigate('/')}>
      <img alt='' src={loggedIn? Logopo : Logoprzed} height='32px'/>
    <Typography variant='h2' color='primary' style={{margin:'0.5rem'}}>{loggedIn? coupleNames : 'WeddingPlanner'}</Typography>
    </IconButton>
    </Box>
  )

  const LogoSmall=(
    <Box >
      <IconButton onClick={()=>loggedIn ? navigate('/WeddingCouple') : navigate('/')}>
        <img alt='' src={loggedIn? Logopo : Logoprzed} height='32px'/>
      </IconButton>
    </Box>
  )

  const matches = useMediaQuery('(min-width:500px)');
 
  const logo=(
    loggedIn? LogoBig:  matches ?  LogoBig :  LogoSmall
  )

  return logo}

  function GetRightSide(){
    const dispatch = useAppDispatch();
    const loggedIn = useAppSelector(isLoggedIn);
    const userName = useAppSelector(selectName);
    let elementForNotLoggedIn= (
      <Box sx={{display:"flex"}}>
      <StyledButton variant='text' color='primary' onClick={() =>dispatch(openDialog({ formType: FormType.rejestracjaEmail }))}>
        ZAREJESTRUJ SIĘ
      </StyledButton>
      <StyledButton variant= 'text' color='primary' onClick={() => dispatch(openDialog({ formType: FormType.loginDialog }))}>
        ZALOGUJ SIĘ
      </StyledButton>
    </Box>
    )
    let elementForLoggedIn= (
      <>
      <Box display="flex" flexDirection={'row'} alignItems="center" justifyContent={'center'}>
        <Typography variant='h4' style={{margin: '0 0.8rem', fontSize: '1rem', color: `${theme.palette.primary.main}`}}>{userName}</Typography>
        <IconButton title={'Wyloguj'}  onClick={()=>dispatch(openDialog({formType: FormType.wyloguj}))}>
          <AccountCircleIcon style={ iconStyle} 
          />
        </IconButton>
      </Box>
      </>
    )
    const rightSide= loggedIn ? elementForLoggedIn : elementForNotLoggedIn
    return rightSide
  }



const AppHeader = () => {
 
  return (
    
      <AppBar position='fixed' color='inherit' style={{boxShadow: `0px 10px -14px 14px #B85C5C`}}>
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

