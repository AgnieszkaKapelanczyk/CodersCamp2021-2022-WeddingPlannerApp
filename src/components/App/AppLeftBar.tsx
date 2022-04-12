import LeftBarListCouple from './LeftBarListCouple';
import LeftBarListGuest from './LeftBarListGuests';
import ListItem from '@mui/material/ListItem';
import { useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { Box,Drawer,Toolbar,IconButton,List,ListItemText,ListItemIcon} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


const useStyles = makeStyles({
  drawer: {
    height: 'calc(100% - 70px)',
    top: 70
  }
})

const leftBarStyle=({
    color:'#6F59C9',
    paddingLeft: '4px'
})



function AppLeftBar() {
    const classes = useStyles();
    const drawerWidth=250;
    const navigate= useNavigate();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    return(
      <Box sx={{ display: 'flex' }}>
      {/* <Toolbar/> */}
      <IconButton
        onClick={handleOpen}
      >
        <MenuIcon />
      </IconButton>
    
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 1,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
    }}
    variant="persistent"
    anchor="left"
    open={open}
  >
    {/* <Toolbar /> */}
    <List style={leftBarStyle} >
      <CloseIcon onClick={handleClose}/>
      {LeftBarListCouple.map((item) => (
        <ListItem sx={{padding:0.3}} button key={item.label} onClick={()=>navigate(item.path)} divider>
          <ListItemIcon style={leftBarStyle}>
            {item.icon}
          </ListItemIcon>
          <ListItemText  primary={item.label} />
        </ListItem>
      ))}
    </List>

  </Drawer>
  </Box>
)
      
}

export default AppLeftBar;