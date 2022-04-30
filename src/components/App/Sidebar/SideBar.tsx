import { styled } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import AppLeftBar from 'components/Sidebar/AppLeftBar';
import { useState } from 'react';

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  const StyledDrawer = styled(Drawer)(({theme})=>({
    '& .MuiDrawer-paper': {
         boxSizing: 'border-box', 
         width: drawerWidth,
         fontSize: '0.9rem',
         lineHeight: '1.6',
         color: theme.palette.tertiary.main, },
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
      borderColor: theme.palette.tertiary.main,
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
  }))

  return (
    <>
       <StyledDrawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
          }}
        >
          <AppLeftBar/>
        </StyledDrawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          <AppLeftBar/>
        </Drawer>     
    </>
  );
}
