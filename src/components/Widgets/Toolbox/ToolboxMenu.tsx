import { Drawer, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector } from "store/hooks";

export default function ToolboxMenu() {
  const ToolboxState: boolean | undefined = useAppSelector((state) => state.toolbox.isOpen);

  const [isOpen, setOpen] = useState<boolean | undefined>(false);

  const handleToolboxClose = () => {
    setOpen(false);

  };

  useEffect(()=> {
    if (ToolboxState) {
      setOpen(true);
    }
  }, [ToolboxState]);

  return (
      <Drawer
        variant="persistent"
        anchor="right"
        open={isOpen}
      >
          <IconButton onClick={handleToolboxClose}>
            <CloseIcon />
          </IconButton>
      
      </Drawer>
  );
}
