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
import ListOfQuestionsForTheRoom from '../WeddingCouple/ListOfQuestionsForTheRoom/ListOfQuestionsForTheRoom';
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
import { Box, GlobalStyles } from '@mui/material';
import DashboardWeddingCouple from 'components/WeddingCouple/MainPanel/DashboardWeddingCouple';
import { StyledEngineProvider } from '@mui/material/styles';
import StyledBox from 'theme/styledBox'
import StartPlanning from 'components/WeddingCouple/StartPlaning/StartingPlanning';
import { useAppSelector } from 'store/hooks';
import { isLoggedIn } from 'store/userSlice';
import RusticThemeBg from "assets/img/rusticTheme.jpg";

const homePageStyle = {
  gridArea: 'main', 
  position: 'relative', 
  top: '66px'
}
const rusticThemeStyle={
  backgroundImage: `url(${RusticThemeBg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '200vh',
  gridArea: 'main', 
  position: 'relative', 
  top: '66px'
};

function App() {
  const loggedIn= useAppSelector(isLoggedIn);
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
      <Box style={{position: 'relative', top: '68px'}}>
        <AppSideBar />
      </Box>
        <Box sx={loggedIn ? rusticThemeStyle : homePageStyle}>
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
        <Route path="/WeddingCouple/ListOfQuestionsForTheRoom/" element={loggedIn ?<ListOfQuestionsForTheRoom/> : <HomePage/>} />
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