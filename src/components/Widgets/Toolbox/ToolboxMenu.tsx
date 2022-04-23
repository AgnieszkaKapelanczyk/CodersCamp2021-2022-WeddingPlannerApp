import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from "store/hooks";
import { selecToolboxState } from "store/ToolboxSlice";

export default function ToolboxMenu() {
  const toolboxState: boolean | undefined = useAppSelector(selecToolboxState);
  const [isOpen, setOpen] = useState<boolean | undefined>(false);
  
  const handleToolboxClose = () => {
    setOpen(false);
  };

  useEffect(()=> {
    if (toolboxState) {
      setOpen(true);
    }
  }, [toolboxState]);

  return (
      <Drawer
        variant="persistent"
        anchor='right'
        open={isOpen}
        onClose={handleToolboxClose}
      >
        <Box display={'flex'} flexDirection={'column'}>
          <Box>
            <IconButton onClick={handleToolboxClose}>
                <CloseIcon />
              </IconButton>
          </Box>
          <Box>
            <Typography variant='body1'>Dodaj widget</Typography>
          </Box>
        </Box>
      
      </Drawer>
  )
};
