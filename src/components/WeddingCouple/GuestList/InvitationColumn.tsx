import { Button, styled, Chip, TableCell} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';

const ColorButton = styled(Button)(() => ({
    backgroundColor: '#FF1A4B',
  }));

  const ColorChipSent = styled(Chip)(() => ({
    backgroundColor: '#ADF893',
    '& .MuiChip-label': {
      color:'#000',
    },
    '& .MuiSvgIcon-root': {
      color:'#000',
    },
  }));

const InvitationColumn = (props: {invitation:string}) => {
  return (
    <TableCell align="center">
      {props.invitation === 'wyślij'?(<ColorButton size='small' variant="contained" style={{color:'error'}} startIcon={<SendIcon />}>
      {props.invitation.toUpperCase()}</ColorButton>):(<ColorChipSent icon={<DoneIcon />} label='wysłano'/>)}  
    </TableCell>

  )
}

export default InvitationColumn