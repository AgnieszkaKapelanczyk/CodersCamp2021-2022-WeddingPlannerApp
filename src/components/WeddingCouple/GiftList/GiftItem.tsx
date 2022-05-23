import { Box, IconButton, styled, Typography, Chip, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface ListOfGifts {
  id:number;
  title:string;
  checked:boolean
}

const gifts: ListOfGifts[] = [
  {id:1, title:'Talerze deserowe Kolekcja Maria 18sztuk',checked:true},
  {id:2, title:'Talerze obiadowe Kolekcja Maria 18sztuk',checked:false},
  {id:3, title:'Filiżanki 200ml Kolekcja Maria 18sztuk',checked:false},
  {id:4, title:'Miseczki 200ml Kolekcja Maria 18sztuk',checked:false},
  {id:5, title:'Bulionówki Kolekcja Maria 18sztuk',checked:false},
  {id:5, title:'Waza na zupę Kolekcja Maria 18sztuk',checked:false},
  {id:5, title:'Talerze na ciasto Maria 3sztuki',checked:false}
]

const StyledNumbersTypography = styled(Typography)(() => ({
  backgroundColor: '#6F59C9',
  margin: '1rem',
  color: '#fff',
  fontWeight: 600,
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})); 

const ColorChipDone = styled(Chip)(() => ({
  backgroundColor: '#6F59C9',
  '& .MuiChip-label': {
    color:'#fff',
  },
  '& .MuiSvgIcon-root': {
    color:'#fff',
  },
}));
const ColorChipDenial = styled(Chip)(() => ({
  backgroundColor: '#FEC5BB',
  '& .MuiChip-label': {
    color:'#fff',
  },
  '& .MuiSvgIcon-root': {
    color:'#fff',
  },
}));

const GiftItem = () => {
  return (
  <>{gifts.map((gift=>(
    <>
    <Box style={{ display:'flex', justifyContent:'center', alignItems:'center'}}>
        <StyledNumbersTypography>{gift.id}</StyledNumbersTypography>
        <Typography style={{flexGrow:1}}>{gift.title}</Typography>
        {gift.checked === true ?<ColorChipDone label='zarezerwowane'/>:<ColorChipDenial label='wolne'/>}
        <IconButton 
            aria-label="social-bar" 
            style={{color: '#fff',paddingLeft:'1rem'}}
            title='Edytuj'>
                <EditIcon style= {{fontSize: '0.8rem', borderRadius: '50%', background: '#6F59C9', padding:'0.4rem'}}/>
        </IconButton> 
        <IconButton 
            aria-label="social-bar" 
            style={{color: '#fff', paddingRight:'1rem'}}
            title='Edytuj'>
                <DeleteIcon style= {{fontSize: '0.8rem', borderRadius: '50%', background: '#6F59C9', padding:'0.4rem'}}/>
        </IconButton> 
    </Box>
  <Divider/></>)
  ))}
      
  </>
  )
}

export default GiftItem