import { AppBar, Button, Typography, Box} from '@material-ui/core'

const AppHeader = () => {
  return (
    <div>
      <AppBar position='static' color='inherit'>
      <Box display={"flex"}>
        <Typography variant='h3' color='primary' style={{margin:'1.5rem'}}>WeddingPlanner</Typography>
        <Box display={"flex"} justifyContent={"flex-end"} flexGrow={"1"} gridColumnGap={"1.2rem"}>
          <Button variant='text' color='primary' style={{margin:'1.5rem'}}>ZAREJESTRUJ SIĘ</Button>
          <Button variant='text' color='primary' style={{margin:'1.5rem'}}>ZALOGUJ SIĘ</Button>
        </Box>
      </Box>
      </AppBar>
    </div>
  )
}

export default AppHeader