import TableCell from '@mui/material/TableCell';
import { styled, Chip } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';


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
    backgroundColor: '#FF7C98',
    '& .MuiChip-label': {
      color:'#fff',
    },
    '& .MuiSvgIcon-root': {
      color:'#fff',
    },
  }));

 const PresenceAtWeddingColumn = (props:{invitation:string;presenceAtWedding:string}) => {
  return (
    <>
        {props.invitation === 'wyślij'?<TableCell align="left"/>:
                      (<TableCell align="center"> {props.presenceAtWedding === 'potwierdzona' ? (<ColorChipDone icon={<DoneIcon />} label='potwierdzona'/>):(<ColorChipDenial icon={<CloseIcon/>} label='odmowa'/>)}</TableCell>)}
    </>
  )
}

export default PresenceAtWeddingColumn;