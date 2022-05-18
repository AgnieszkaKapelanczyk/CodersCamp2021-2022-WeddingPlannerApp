import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import Groom from '../WeddingCouple/Groom/Groom';
import Bride from '../WeddingCouple/Bride/Bride';
import WeddingCeremony from '../WeddingCouple/WeddingCeremony/WeddingCeremony';
import WeddingCalendar from '../WeddingCouple/WeddingCalendar/WeddingCalendar';
import GuestList from '../WeddingCouple/GuestList/GuestList';
import GiftList from '../WeddingCouple/GiftList/GiftList';
import Invitations from '../WeddingCouple/Invitations/Invitations';
import Spending from '../WeddingCouple/Spending/Spending';
import Messages from '../WeddingCouple/Messages/Messages';
import Notes from '../WeddingCouple/Notes/Notes';
import ArrangementOfTables from '../WeddingCouple/ArrangementOfTables/ArrangementOfTables';
import PicturesForInspiration from '../WeddingCouple/PicturesForInspiration/PicturesForInspiration';
import ToDoList from '../WeddingCouple/ToDoList/ToDoList';
import WeddingParty from '../WeddingCouple/WeddingParty/WeddingParty';
import InvitationDesign from '../WeddingCouple/Invitations/InvitationDesign/InvitationDesign';
import SendingTheInvitation from '../WeddingCouple/Invitations/SendingTheInvitation/SendingTheInvitation';
import WeddingGuests from '../WeddingGuests/WeddingGuests';
import RSVP from '../WeddingGuests/RSVP/RSVP';
import Hotels from '../WeddingGuests/Hotels/Hotels';
import ChoosingOfGift from '../WeddingGuests/ChoosingOfGift/ChoosingOfGift';
import WeddingMap from '../WeddingGuests/WeddingMap/WeddingMap';
import { theme } from 'theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import AppSideBar from './AppSideBar';
import Dialog from '../Dialog/Dialog';
import { Box, GlobalStyles , useMediaQuery} from '@mui/material';
import DashboardWeddingCouple from 'components/WeddingCouple/MainPanel/DashboardWeddingCouple';
import { StyledEngineProvider } from '@mui/material/styles';
import StyledBox from '../../theme/styledBox'
import StartPlanning from '../WeddingCouple/StartPlaning/StartingPlanning';
import { useAppSelector } from 'store/hooks';
import { isLoggedIn } from 'store/userSlice';
import RusticThemeBg from "assets/img/rusticTheme.jpg";
import MovieThemeBg from "assets/img/movieTheme.jpg";
import ClassicThemeBg from "assets/img/classicTheme.jpg";
import { selectActualTheme } from 'store/themeSlice';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';



function App() {
  const loggedIn = useAppSelector(isLoggedIn);
  const themeStatus = useAppSelector(selectActualTheme);
  const [themeName, setTheme] = useState<string>('rustic');
  const matches = useMediaQuery('(min-width:600px)');

  const homePageStyle = {
    gridArea: 'main', 
    position: 'relative', 
    top: '66px'
  }
  const panelThemeStyle={
    height: '200vh',
    gridArea: 'main', 
    position: 'relative', 
    top: '66px',
    backgroundImage: `url(${themeName})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const boxBigScreenStyle= {
  
    position: 'relative',
     top: '68px',
  }

  useEffect(()=> {
      if (themeStatus === 'Rustic') {
        setTheme(RusticThemeBg);
      } else if (themeStatus === 'Classic') {
        setTheme(ClassicThemeBg);
      } else if (themeStatus === 'Movie') {
        setTheme(MovieThemeBg);
      } 
  },[themeStatus]);


  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalStyles
          styles={{
            h1: { color: 'primary' },
            '*::-webkit-scrollbar': {
              width: '0.7em',
            },
            '*::-webkit-scrollbar-track': {
              background: theme.palette.common.white,
            },
            '*::-webkit-scrollbar-thumb': {
              backgroundColor: `${theme.palette.primary.main}`,
            },
          }}
        />
      <Dialog />
      <Box> 
       <Box component={StyledBox(loggedIn)}>
        <Box sx={{ gridArea: 'header'}}>
          <AppHeader/> 
        </Box>  
      <Box sx={ matches ? boxBigScreenStyle : null}>
        <AppSideBar />
      </Box>
        <Box sx={loggedIn ? panelThemeStyle : homePageStyle}>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/StartPlanning" element={<StartPlanning/>} />
        <Route path="/WeddingCouple/" element={loggedIn ? <DashboardWeddingCouple/> : <HomePage/>} />
        <Route path="/WeddingCouple/Groom/" element={loggedIn ?<Groom/> : <HomePage/>} />
        <Route path="/WeddingCouple/Bride/" element={loggedIn ?<Bride/> : <HomePage/>} />
        <Route path="/WeddingCouple/ToDoList/" element={loggedIn ?<ToDoList/> : <HomePage/>} />
        <Route path="/WeddingCouple/WeddingCeremony/" element={loggedIn ?<WeddingCeremony/> : <HomePage/>} />
        <Route path="/WeddingCouple/WeddingParty/" element={loggedIn ?<WeddingParty/> : <HomePage/>} />
        <Route path="/WeddingCouple/WeddingCalendar/" element={loggedIn ?<WeddingCalendar/> : <HomePage/>} />
        <Route path="/WeddingCouple/GuestList/" element={loggedIn ?<GuestList/> : <HomePage/>} />
        <Route path="/WeddingCouple/GiftList/" element={loggedIn ?<GiftList/> : <HomePage/>} />
        <Route path="/WeddingCouple/Invitations/" element={loggedIn ?<Invitations/> : <HomePage/>} />
        <Route path="/WeddingCouple/Invitations/InvitationDesign/" element={loggedIn ?<InvitationDesign/> : <HomePage/>} />
        <Route path="/WeddingCouple/Invitations/SendingTheInvitation/" element={loggedIn ?<SendingTheInvitation/> : <HomePage/>} />
        <Route path="/WeddingCouple/Spending/" element={loggedIn ?<Spending/> : <HomePage/>} />
        <Route path="/WeddingCouple/Messages/" element={loggedIn ?<Messages/> : <HomePage/>} />
        <Route path="/WeddingCouple/Notes/" element={loggedIn ?<Notes/> : <HomePage/>} />
        <Route path="/WeddingCouple/ArrangementOfTables/" element={loggedIn ?<ArrangementOfTables/> : <HomePage/>} />
        <Route path="/WeddingCouple/PicturesForInspiration/" element={loggedIn ?<PicturesForInspiration/> : <HomePage/>} />
        <Route path="/WeddingGuests/" element={loggedIn ?<WeddingGuests/> : <HomePage/>} />
        <Route path="/WeddingGuests/RSVP/" element={loggedIn ?<RSVP/> : <HomePage/>} />
        <Route path="/WeddingGuests/ChoosingOfGift/" element={loggedIn ?<ChoosingOfGift/> : <HomePage/>} />
        <Route path="/WeddingGuests/Hotels/" element={loggedIn ?<Hotels/> : <HomePage/>} />
        <Route path="/WeddingGuests/WeddingMap/" element={loggedIn ?<WeddingMap/> : <HomePage/>} />
      </Routes> 
      </Box>
    
      </Box>
      <AppFooter/>
      </Box>
    </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;