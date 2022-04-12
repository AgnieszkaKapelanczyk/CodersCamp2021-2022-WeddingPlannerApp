import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import LeftBarListCouple from './LeftBarListCouple';
import LeftBarListGuest from './LeftBarListGuests';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@mui/styles';


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
    
    return(
    
  //   <Drawer
  //   // PaperProps={{ style: { height: "90vh" } }}
  //   // className={classes.drawer}
  //   sx={{
  //     width: drawerWidth,
  //     flexShrink: 1,
  //     '& .MuiDrawer-paper': {
  //       width: drawerWidth,
  //       boxSizing: 'border-box',
  //     },
  //   }}
  //   variant="permanent"
  //   anchor="left"
   
  // >
  
    <List style={leftBarStyle} sx={{borderRight: '1px solid', borderColor:'#6F59C9' ,maxWidth:"260px", height:"100%", paddingRight:'10px'}}>
      {LeftBarListCouple.map((item) => (
        <ListItem sx={{padding:0.3}} button key={item.label} onClick={()=>navigate(item.path)} divider>
          <ListItemIcon style={leftBarStyle}>
            {item.icon}
          </ListItemIcon>
          <ListItemText  primary={item.label} />
        </ListItem>
      ))}
    </List>
 
  // </Drawer>
  
)
      
}

export default AppLeftBar;