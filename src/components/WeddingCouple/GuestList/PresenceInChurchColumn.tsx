import TableCell from '@mui/material/TableCell';
import { styled, Chip } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const ColorChipDone = styled(Chip)(() => ({
    backgroundColor: '#6F59C9',
    '& .MuiChip-label': {
      color:'#fff',
    },
    '& .MuiSvgIcon-root': {
      color:'#fff',
    },
  }));

  const ColorChipWaiting = styled(Chip)(() => ({
    backgroundColor: '#FFAB09',
    '& .MuiChip-label': {
      color:'#fff',
    },
  }));


const PresenceInChurchColumn = (props:{invitation:string;presenceInChurch:string}) => {
  return (
    <>
        {props.invitation === 'wyślij'?<TableCell align="left"/>:
        (<TableCell align="center">
        { props.presenceInChurch === 'potwierdzona' ? (<ColorChipDone icon={<DoneIcon />} label='potwierdzona'/>):(<ColorChipWaiting label='oczekiwanie'/>)} 
        </TableCell>)}  </>
  )
}
    
export default PresenceInChurchColumn