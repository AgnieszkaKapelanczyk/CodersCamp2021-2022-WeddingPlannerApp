import { Box, Button, Checkbox, FormControlLabel, FormGroup, List, ListItem, styled, Typography } from "@mui/material";
import { useState } from "react";
import { ClothesToDoArray } from "./ClothesToDoArray";
import CloseIcon from '@mui/icons-material/Close';
import ProgressCircle from "common/ProgressCircle/ProgressCircle";
import { theme } from "theme/theme";

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    '& .MuiSvgIcon-root': {
        fill: theme.palette.tertiary.main,
    }
  }));


const BrideClothes = () => {
  const [toDoArray, setToDo] = useState<string[]>(ClothesToDoArray);

    return (
      <Box display={'flex'} flexDirection={'row'}>
        <Box display={'flex'} flexDirection={'column'}>
          <Button variant="contained" color={'tertiary'}>Dodaj do listy</Button>
          <List>
            <FormGroup>
              {
                toDoArray.map((el,id)=>{
                  return (
                    <ListItem key={`listItem-${id}`}>
                      <FormControlLabel 
                        key={`formControllLabel-${id}`}
                        control={
                            <StyledCheckbox 
                              icon={
                                <CloseIcon/>
                              }
                              key={`checkbox-${id}`}/>
                        } 
                        label={el}
                      />
                  </ListItem>
                  )
                })
              }
            </FormGroup>
          </List>
        </Box>
        <Box display={'flex'} flex={1} flexDirection={'column'} justifyContent={'center'} style={{height: '50%'}}>
                <ProgressCircle
                  radius={ 60 }
                  stroke={ 8 }
                  progress={ 34 }
                />
                <Typography align={'center'} color={theme.palette.tertiary.main} style={{fontWeight: 600, marginBottom: '2rem'}}>Postęp Twoich przygotowań</Typography>
            </Box>
        
      </Box>
    )
};

export default BrideClothes;

