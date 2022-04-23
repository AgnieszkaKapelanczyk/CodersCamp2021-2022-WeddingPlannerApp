import { Box, ButtonBase, Checkbox, Drawer, FormGroup, FormControlLabel, IconButton, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from "store/hooks";
import { closeToolbox, selecToolboxState } from "store/ToolboxSlice";
import { theme } from "theme/theme";
import TimerWidget from 'assets/img/TimerWidget.png';
import NotificationWidget from 'assets/img/NotificationWidget.png';
import ReminderWidget from 'assets/img/ReminderWidget.png';
import PhotoWidget from 'assets/img/PhotoWidget.png';
import ProgressWidget from 'assets/img/ProgressWidget.png';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  '& .css-18sg6k4-MuiPaper-root-MuiDrawer-paper': {
    top: '66px',
    backgroundColor: theme.palette.secondary.light,
  }
}));

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  opacity: 1,
  '& .widgetName': {
    color: theme.palette.common.black,
    position: 'relative',
    padding: '4rem 6rem',
       '&:hover': {
          opacity: 0,
    }
  },
  [theme.breakpoints.down('sm')]: {
    width: '100% !important',
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
});

const Image = styled('span')(({ theme }) => ({
  objectFit: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.primary.main,
  opacity: 0.8,
  transition: theme.transitions.create('opacity'),
  borderRadius: '2%',
  
}));

export default function ToolboxMenu() {
  const dispatch = useAppDispatch();
  const toolboxState: boolean | undefined = useAppSelector(selecToolboxState);
  const [isOpen, setOpen] = useState<boolean | undefined>(false);

  const images = [
    {
      url: TimerWidget,
      title: 'Odliczanie do dnia ślubu',
    },
    {
      url: NotificationWidget,
      title: 'Powiadomienia',
    },
    {
      url: ReminderWidget,
      title: 'Przypomnienia',
    },
    {
      url: ProgressWidget,
      title: 'Postęp przygotowań',
    },
    {
      url: PhotoWidget,
      title: 'Zdjęcia',
    },
  ];
  
  const handleToolboxClose = () => {
    setOpen(false);
    dispatch(closeToolbox())
  };

  useEffect(()=> {
    if (toolboxState) {
      setOpen(true);
    }
  }, [toolboxState]);

  return (
      <StyledDrawer
        variant="persistent"
        anchor='right'
        open={isOpen}
        onClose={handleToolboxClose}
      >
        <IconButton style={{position: 'absolute', top: '10px', right: '10px', color: `${theme.palette.tertiary.main}`}} onClick={handleToolboxClose}>
                  <CloseIcon />
        </IconButton>
        <Box display={'flex'} flexDirection={'column'} margin={'1rem'}>
          <Box display={'flex'}>
              <Typography variant='h4' style={{color: `${theme.palette.tertiary.main}`, margin: '1rem 0', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Widgety:</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
          <FormGroup>
          {images.map((image) => (
            <>
            <FormControlLabel control={<Checkbox defaultChecked />} label={`${image.title}`} />
            <ImageButton
              key={image.title}
              style={{
                width: '260px',
                height: '140px',
                margin: '0.8rem 0',
              }}
            >
              <ImageSrc style={{ backgroundImage: `url(${image.url})`,  borderRadius: '4%', boxShadow:  '0px 2px 4px -1px rgb(0 0 0 / 20%)' }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  className="widgetName"
                  component="span"
                  variant="subtitle1"
                >
                  + Dodaj
                </Typography>
              </Image>
            </ImageButton>
        </>
      ))}
      </FormGroup>
          </Box>
        </Box>
      
      </StyledDrawer>
  )
};
