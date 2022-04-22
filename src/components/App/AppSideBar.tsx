import AppLeftBar from "./AppLeftBar";
import { useMediaQuery, Box,  Fab } from '@mui/material';
import { useState } from "react";
import { Menu } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import {theme} from '../../theme/theme'
import { useSelector } from "react-redux";
import { loggedInUser } from "store/loginSlice";
 
  
  function AppSideBar() {
      const [open, setOpen] = useState(false);
      const matches = useMediaQuery('(min-width:600px)')
      const loggedIn= useSelector(loggedInUser)
      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    
      return(
        !loggedIn ? null : (
          matches ? <AppLeftBar/> : (
        <Box >
            <Box sx={{ position:'absolute', top:'70px', backgroundColor:'#FFF', borderRadius:'50%', padding:'0'}}> 
             <Fab sx={{size:'large', variant:'circular', backgroundColor:'#FFF'}}onClick={handleOpen} >
     <ListIcon style={{padding:'0' , margin:'0', fontSize:'large', color:'#C26D6D', ...(open && { display: 'none' })}} /> 
     </Fab>
     </Box>
    <Menu open={open} sx={{maxWidth:'250px'}}>
            <CloseIcon style={{ padding:'5px', color:theme.palette.tertiary.main}} onClick={handleClose}/>
          <AppLeftBar/> 
      </Menu>
      </Box>
      )));   
  };


export default AppSideBar;