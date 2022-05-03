import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {styled} from "@mui/material";

const StyledStack = styled(Stack)(({ theme }) => ({
    '& .MuiChip-root': {
      fontFamily:'Lato',
    },
  }));

export default function ColorChips() {
  return (
    <Stack spacing={2} alignItems="center">
      <StyledStack direction="column" spacing={2}>
        <Chip label="Przymiarki" color="primary"/>
        <Chip label="Wyjazdy" color="secondary"/>
        <Chip label="Do zrobienia" color="success"/>
        <Chip label="Ważne" color="error"/>
      </StyledStack>
    </Stack>
  );
}