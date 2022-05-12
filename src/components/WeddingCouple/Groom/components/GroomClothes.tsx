import { Box, Button, Checkbox, FormControlLabel, FormGroup, List, ListItem, styled, Typography } from "@mui/material";
import { useState } from "react";
import { ClothesToDoArray } from "./ClothesToDoArray";
import CloseIcon from '@mui/icons-material/Close';
import ProgressCircle from "common/ProgressCircle/ProgressCircle";
import { theme } from "theme/theme";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const StyledCheckboxClothes = styled(Checkbox)(({ theme }) => ({
    '& .MuiSvgIcon-root': {
        fill: theme.palette.tertiary.main,
    }
  }));

const StyledListItem = styled(ListItem)(({theme}) => ({
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  width: '300px',
  '&:hover': {
    background: theme.palette.secondary.light,
    cursor: 'pointer',
  },
  '&:hover > .hiddenIcon': {
    display: 'block',
  },
}));

const StyledDeleteIcon = styled(DeleteIcon)(({theme}) => ({
    color: theme.palette.secondary.main,
    display: 'none',
    borderRadius: '50%',
    padding: '5px',
    '&:hover': {
      cursor: 'pointer',
      transition: '0.8s',
      color: theme.palette.tertiary.main,
    },
}));

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.tertiary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.tertiary.main,
    fontFamily: 'Lato',
    fontSize: 11,
    marginTop: 0
  },
}));

const GroomClothes = () => {
  const [toDoArray, setToDo] = useState<string[]>(ClothesToDoArray);

    return (
      <>
         <Box display={'flex'} flexDirection={'column'}>
          <Button variant={"contained"} color={'tertiary'} style={{width:'260px', margin:'1rem'}} startIcon={<AddCircleIcon style={{margin: '0 12px 0 0', textAlign: 'left'}}/>}>DODAJ DO LISTY</Button>
          <List>
            <FormGroup>
              {
                toDoArray.map((el,id)=>{
                  return (
                    <StyledListItem key={`listItem-${id}`}>
                      <FormControlLabel 
                        key={`formControllLabel-${id}`}
                        control={
                            <StyledCheckboxClothes 
                              icon={
                                <CloseIcon/>
                              }
                              key={`checkbox-${id}`}/>
                        } 
                        label={el}
                      />
                      <StyledTooltip title={"Usuń"}>
                        <StyledDeleteIcon className={'hiddenIcon'}/>  
                      </StyledTooltip>
                  </StyledListItem>
                  )
                })
              }
            </FormGroup>
          </List>
        </Box>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}>
                <ProgressCircle
                  radius={ 60 }
                  stroke={ 8 }
                  progress={ 34 }
                  
                />
                <Typography align={'center'} color={theme.palette.secondary.main} style={{fontWeight: 600, marginBottom: '2rem'}}>Postęp Twoich przygotowań</Typography>
        </Box>
        
      </>
    )
};

export default GroomClothes;

