import bg from 'assets/img/bg1.jpg'
import {Card, Box,Button, CardHeader, CardContent, Divider, Typography, TextField, Checkbox} from '@mui/material'
import { theme} from 'theme/theme'
import {useNavigate} from 'react-router-dom';
import { styled } from '@mui/material/styles';


const StyledCard = styled(Card)(({ theme }) => ({
    margin: '20px',
    width: '50%' ,
    [theme.breakpoints.down('lg')]: {
      width:'60%'
    },  
      [theme.breakpoints.down('md')]: {
        height: "auto",
        width: "65%",
      },
      [theme.breakpoints.down('sm')]: {
        height: "auto",
        width: "85%",
      },
      [theme.breakpoints.down('xs')]: {
        height: "auto",
        width: "95%",
      },
    }
  ));
  const StyledBox = styled(Box)(({ theme }) => ({
   
    [theme.breakpoints.down('md')]: {
      flexDirection:'column',
    },  
}));

function StartPlanning() {
const navigate=useNavigate()

    const styles={
        card :{
          margin: '20px',
          width: '50%' ,
        },
        text:{
          color: theme.palette.primary.main,
          variant: theme.typography.body2,
          fontSize:"1.2rem"
        },
        text2:{
          color: theme.palette.primary.main,
          fontSize:"2rem",
          fontWeight:'400',
        },
        checkbox:{
            color:theme.palette.primary.main,
        }
      }

    return(
    <Box sx={{backgroundImage:`url(${bg})`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%'}}>
    
<Box sx={{display:"flex", justifyContent:"center", padding: '10px'}}>
<StyledCard>
<Box sx={{display:"flex", justifyContent:"center", padding: '10px'}}>
    <CardHeader title="ZACZYNAMY PLANOWANIE TWOJEGO ŚLUBU " style={styles.text2}>
    </CardHeader>
    </Box>
    <Divider/>
    <CardContent >
        <Box sx={{display:"flex", justifyContent:"center", padding: '10px'}}  >

    <Typography fontSize="1.1rem" textAlign="center">Gratulacje! Zrobiłeś już pierwszy krok i wybrałeś najlepszy ślubny planner. Czas zaprosić Twoją drugą połówkę!</Typography>
        </Box>
    <StyledBox sx={{display:"flex", justifyContent:"space-evenly", padding: '10px'}}>

        <Box sx={{display:"flex", flexDirection:'column', justifyContent:"center", padding: '10px'}}>
       <Typography style={styles.text}>Będę:  </Typography> 
       <Typography><Checkbox style={styles.checkbox} /> Panną Młodą  </Typography>
       <Typography><Checkbox style={styles.checkbox} />Panem Młodym  </Typography>  
        </Box>

        <Box sx={{display:"flex", flexDirection:'column', justifyContent:"center",  padding: '10px'}}>
        <Typography style={styles.text}> Moja druga połówka będzie:  </Typography>  
       <Typography ><Checkbox style={styles.checkbox} /> Panną Młodą  </Typography>
       <Typography><Checkbox style={styles.checkbox}/> Panem Młodym  </Typography>  
        </Box>

    </StyledBox>
    <Box sx={{display:"flex", flexDirection:'column', justifyContent:"flex-end", alignItems:'flex-end', padding: '10px', gap:'10px'}}>

        <TextField helperText="Podaj imię swojej drugiej połówki" ></TextField>
    <Button size="small" variant="contained" onClick={() =>navigate('/')}>Wyślij zaproszenie</Button>
    </Box>
    </CardContent>
</StyledCard>
    </Box>
</Box>)

}

export default StartPlanning;