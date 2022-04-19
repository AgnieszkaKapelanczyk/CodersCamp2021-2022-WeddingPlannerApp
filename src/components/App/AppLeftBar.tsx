import LeftBarListCouple from './LeftBarListCouple';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { theme} from '../../theme/theme'
import { styled } from '@material-ui/styles';

const SideBar = styled(List)<{ component?: React.ElementType }>({
  '& .MuiTypography-root': {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    color: theme.palette.tertiary.main,
  },
  '& .MuiListItem-root': {
    padding: '5px',
    '&:hover': {
      backgroundColor: theme.palette.tertiary.light,
    }
    
  },
  '& .MuiListItemButton-root': {
    margin: '10px',
    paddingLeft: 24,
    paddingRight: 24,
    color: theme.palette.tertiary.main,
    border: '1px solid',
    borderColor: theme.palette.tertiary.light,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    margin: '10px 14px',
    color:theme.palette.tertiary.main,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
    position: 'relative',
    top: "1.5px"
  },
});


function AppLeftBar() {
    const navigate= useNavigate();

    return(
 
    <SideBar sx={{paddingTop: 0, paddingBottom: 0, position:"sticky", top:"0", minWidth:'180px'}}>
      {LeftBarListCouple.map((item) => (
        <ListItem button key={item.label} onClick={()=>navigate(item.path)} divider >
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText  primary={item.label}  />
        </ListItem>
      ))}
    </SideBar>

    );   
};

export default AppLeftBar;