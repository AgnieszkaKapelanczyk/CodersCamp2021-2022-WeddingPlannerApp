import { Button, styled, Chip} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import DoneIcon from '@mui/icons-material/Done';

const ColorButton = styled(Button)(() => ({
    backgroundColor: '#FF1A4B',
  }));

const ColorChip = styled(Chip)(() => ({
    backgroundColor: '#ADF893',
  }));

const InvitationColumn = (props: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined) => {
  return (
      <div>
          
    <ColorButton size='small' variant="contained" style={{color:'error'}} startIcon={<SendIcon />}>{props}</ColorButton>
    <ColorChip icon={<DoneIcon />} label='potwierdzona'/>
           </div>

  )
}

export default InvitationColumn