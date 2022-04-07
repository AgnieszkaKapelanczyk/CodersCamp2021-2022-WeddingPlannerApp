import { Typography} from '@material-ui/core';

const AppFooter = () => {
  return (
    <footer style={{backgroundColor: '#F8EDEB'}}>
      <Typography variant='body1' paragraph={true} style={{paddingTop:'10rem', paddingBottom: '4rem', paddingLeft: '4rem'}}>Projekt został zrealizowany w ramach:</Typography>
    </footer>
  )
}

export default AppFooter