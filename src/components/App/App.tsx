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
import { theme } from '../../theme/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import AppLeftBar from './AppLeftBar';
import Dialog from '../Dialog/Dialog';
import { Box, styled } from '@mui/material';
import DashboardWeddingCouple from '../../components/WeddingCouple/MainPanel/DashboardWeddingCouple';
import { StyledEngineProvider } from '@mui/material/styles';

const StyledBox = styled(Box)<{ component?: React.ElementType }>({
  gridArea: 'leftBar', 
  border: '1px solid ',
  borderColor: theme.palette.tertiary.main,
})

function App() {
  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Dialog />
      <Box height={"100%"} > 
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"header header header header header header"
        "leftBar main main main main main"
        "footer footer footer footer footer footer"`,
        }}>
        <Box sx={{ gridArea: 'header'}}>
      <AppHeader/> 
        </Box>  
      <StyledBox>
      <AppLeftBar />
      </StyledBox>
        <Box sx={{ gridArea: 'main'}}>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/WeddingCouple/" element={<DashboardWeddingCouple/>} />
        <Route path="/WeddingCouple/Groom/" element={<Groom/>} />
        <Route path="/WeddingCouple/Bride/" element={<Bride/>} />
        <Route path="/WeddingCouple/ToDoList/" element={<ToDoList/>} />
        <Route path="/WeddingCouple/WeddingCeremony/" element={<WeddingCeremony/>} />
        <Route path="/WeddingCouple/WeddingParty/" element={<WeddingParty/>} />
        <Route path="/WeddingCouple/WeddingCalendar/" element={<WeddingCalendar/>} />
        <Route path="/WeddingCouple/GuestList/" element={<GuestList/>} />
        <Route path="/WeddingCouple/GiftList/" element={<GiftList/>} />
        <Route path="/WeddingCouple/Invitations/" element={<Invitations/>} />
        <Route path="/WeddingCouple/Invitations/InvitationDesign/" element={<InvitationDesign/>} />
        <Route path="/WeddingCouple/Invitations/SendingTheInvitation/" element={<SendingTheInvitation/>} />
        <Route path="/WeddingCouple/Spending/" element={<Spending/>} />
        <Route path="/WeddingCouple/Messages/" element={<Messages/>} />
        <Route path="/WeddingCouple/Notes/" element={<Notes/>} />
        <Route path="/WeddingCouple/ArrangementOfTables/" element={<ArrangementOfTables/>} />
        <Route path="/WeddingCouple/PicturesForInspiration/" element={<PicturesForInspiration/>} />
        <Route path="/WeddingCouple/ListOfQuestionsForTheRoom/" element={<ListOfQuestionsForTheRoom/>} />
        <Route path="/WeddingGuests/" element={<WeddingGuests/>} />
        <Route path="/WeddingGuests/RSVP/" element={<RSVP/>} />
        <Route path="/WeddingGuests/ChoosingOfGift/" element={<ChoosingOfGift/>} />
        <Route path="/WeddingGuests/Hotels/" element={<Hotels/>} />
        <Route path="/WeddingGuests/WeddingMap/" element={<WeddingMap/>} />
      </Routes> 
      </Box>
      <Box sx={{ gridArea: 'footer'}}>
      <AppFooter/>
      </Box>
      </Box>
      </Box>
    </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;