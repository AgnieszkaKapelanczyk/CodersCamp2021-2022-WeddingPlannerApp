import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import LeftBarListCouple from './LeftBarListCouple';
import LeftBarListGuest from './LeftBarListGuests';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@material-ui/core/styles';


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
  //     // '& .MuiDrawer-paper': {
  //     //   width: drawerWidth,
  //     //   boxSizing: 'border-box',
  //     // },
  //   }}
  //   variant="permanent"
  //   anchor="left"
   
  // >
    // <Toolbar />
    <List style={leftBarStyle} >
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