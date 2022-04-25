import { Box, ButtonBase, Drawer, FormGroup, FormControlLabel, IconButton, styled, Typography, FormControl  } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from "store/hooks";
import { theme } from "theme/theme";
import MovieTheme from'assets/img/motywFilmowy.png';
import RusticTheme from'assets/img/motywRustykalny.png';
import ClassicTheme from'assets/img/motywKlasyczny.png';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { selectToolboxThemeState, closeToolboxTheme } from "store/themeToolboxSlice";
import { selectActualTheme, themeFeature, updateTheme } from "store/themeSlice";


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
    padding: '4rem 5rem',
    marginRight: '1rem',
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
      opacity: 0,
    },
  },
}));

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  '.MuiFormControlLabel-label': checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  marginRight: '1rem'
});

const Image = styled('span')(({ theme }) => ({
  objectFit: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  color: theme.palette.common.white,
  marginRight: '1rem',
}));

export default function ThemeToolboxMenu() {
  const dispatch = useAppDispatch();
  const toolboxState: boolean | undefined = useAppSelector(selectToolboxThemeState);
  const themeState: themeFeature = useAppSelector(selectActualTheme);
  const [isOpen, setOpen] = useState<boolean | undefined>(false);
  const [actualTheme, setActualTheme] = useState<themeFeature>('Rustic');
  const listTheme = ['Rustic','Classic', 'Movie'];

  function isthemeFeature(str: string): str is themeFeature {
    return (
      !!listTheme.find((feature) => str === feature) && str !== undefined 
    );
  };




  const images = [
    {
      url: MovieTheme,
      title: 'Filmowy',
      value: 'Movie',
    },
    {
      url: RusticTheme,
      title: 'Rustykalny',
      value: 'Rustic',
    },
    {
      url: ClassicTheme,
      title: 'Klasyczny',
      value: 'Classic',
    },
  ];
  
  const handleToolboxClose = () => {
    setOpen(false);
    dispatch(closeToolboxTheme())
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(updateTheme({themeName: event.currentTarget.value}));
  };

  const handleChange = (event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
    const value = (event.target as HTMLInputElement).value;
    if (isthemeFeature(value)){
      dispatch(updateTheme({themeName: value}));
    };
  };

  useEffect(()=> {
    if (toolboxState) {
      setOpen(true);
    }
  }, [toolboxState]);

  useEffect(()=> {
    if (themeState) {
      setActualTheme(themeState);
    }
  }, [themeState]);

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
              <Typography variant='h4' style={{color: `${theme.palette.tertiary.main}`, margin: '1rem 0', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Motywy:</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
            <RadioGroup name="use-radio-group" >
          {images.map((image) => (
            <React.Fragment key={`divCheckbox-${image.title}`}>
            <FormControlLabel 
              key={`label-${image.title}`}
              control={<Radio />}
              label={`${image.title}`}
              value={image.value}
              onChange={handleChange}
              checked={actualTheme=== image.value? true : false } />
            <ImageButton
              key={`imagebutton-${image.title}`}
              value={image.value}
              style={{
                width: '260px',
                height: '140px',
                margin: '0.8rem 0',
              }}
              onClick={handleClick}
            >
              <ImageSrc 
                key={`imagesrc-${image.title}`}
                style={{ backgroundImage: `url(${image.url})`,  borderRadius: '4%', boxShadow:  '0px 2px 4px -1px rgb(0 0 0 / 20%)' }} />
            </ImageButton>
        </React.Fragment>
      ))}
       </RadioGroup>
          </Box>
        </Box>
      </StyledDrawer>
  )
};
