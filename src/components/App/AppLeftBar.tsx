import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import LeftBarListCouple from './LeftBarListCouple';
import LeftBarListGuest from './LeftBarListGuests';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { theme} from '../../theme/theme'



const useStyles = makeStyles({
  leftBar: {
    color: theme.palette.tertiary.main,
    paddingLeft: '10px',
  }
})

const leftBarStyle=({
    color:theme.palette.tertiary.main,
    paddingLeft: '10px'
})



function AppLeftBar() {
    const classes = useStyles();
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
    
  
    <List style={leftBarStyle} >
      {LeftBarListCouple.map((item) => (
        <ListItem sx={{padding:0.3, color:theme.palette.tertiary.main}} button key={item.label} onClick={()=>navigate(item.path)} divider>
          <ListItemIcon  >
            {item.icon}
          </ListItemIcon>
          <ListItemText  primary={item.label} sx={{paddingRight:'10px', color:'BAAAFB' }}  />
        </ListItem>
      ))}
    </List>

  // </Drawer>
  
)
      
}

export default AppLeftBar;