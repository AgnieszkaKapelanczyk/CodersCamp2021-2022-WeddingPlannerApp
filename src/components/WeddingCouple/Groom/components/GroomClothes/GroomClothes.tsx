import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, IconButton, List, ListItem, styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ProgressCircle from "common/ProgressCircle/ProgressCircle";
import { theme } from "theme/theme";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { ClothesToDoArray } from "./ClothesToDoArray";
import DownloadIcon from '@mui/icons-material/Download';
import { addCloth, removeCloth, selectListOfClothes, updateClothes } from "store/clothesSlice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { toast } from "react-toastify";

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

const StyledProgressBox = styled(Box)(({theme})=> ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50%',
  borderRadius: '8px',
  backgroundColor: theme.palette.secondary.light,
  boxShadow: '0px 2px 35px 14px rgba(13, 13, 13, 0.04)',
  padding: '3rem 1rem',
  margin: '0 2rem 1rem 0',
}));

const StyledTextField = styled(TextField)(({theme})=> ({
  margin: '1rem',
  '& label.Mui-focused': {
    color: theme.palette.tertiary.main,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.tertiary.main,
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.tertiary.main,
    },
  },

}));

const GroomClothes = () => {
  const dispatch = useAppDispatch();
  const listClothes = useAppSelector(selectListOfClothes);

  const [toDoArray, setClothesArray] = useState<string[]>([]);
  const [newValue, setValue] = useState<string>("");

  const handleDownloadClick = () => {
      setClothesArray(ClothesToDoArray);
      updateClothes({updatedList: ClothesToDoArray });
      toast.success('Dodano przykładową listę')
  };

  const handleResetList = () => {
      dispatch(updateClothes({updatedList: []}));
  };

  useEffect(()=>{
      setClothesArray(listClothes);
  },[listClothes]);

    return (
      <>
         <Box display={'flex'} flexDirection={'column'} flex={2} justifyContent={'center'}>
            
            <Typography variant={'subtitle1'} style={{margin: '1rem 1rem 0 1rem', color: `${theme.palette.tertiary.main}`}}> Listę możesz dowolnie modyfikować dodając lub usuwając elementy.</Typography>
           <Box display={'flex'} my={2} >
             <StyledTextField 
                label="Dodaj element garderoby" 
                focused
                size="small"
                onChange={(e)=>setValue(e.target.value)}
                variant="outlined"
                value={newValue}
              />
             <Button 
                variant={"contained"} 
                color={'tertiary'} 
                style={{width:'260px', margin:'1rem'}} 
                disabled={newValue.trim() === ""}
                onClick = {() => {
                    dispatch(addCloth(newValue.trim()));
                    setValue("");
                }}
                startIcon={<AddCircleIcon style={{margin: '0 12px 0 0', textAlign: 'left'}}/>}>DODAJ DO LISTY</Button>
           </Box>
           <Typography variant="h3" style={{margin: '1rem'}}>Lista elementów garderoby:</Typography>
            <Divider style={{width: '60%'}}/>
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
                        <StyledTooltip title={"Usuń z listy"}>
                            <StyledDeleteIcon className={'hiddenIcon'}/> 
                        </StyledTooltip>
                    </StyledListItem>
                    )
                  })
                }
              </FormGroup>
            </List>
        </Box>
        <Box flex={1}>
          <Box style={{borderRadius: '8px', border: '2px solid', borderColor: `${theme.palette.tertiary.light}`, padding: '1rem', margin: '0 2rem 2rem 0',}}>
              <Typography style={{margin: '1rem 1rem 1rem 1rem'}}>Możesz skorzystać z gotowej listy lub utworzyć własną.</Typography>
              <Box display={'flex'} flexDirection={'column'}>
                  <Button 
                    size={'small'} 
                    variant={"contained"} 
                    color={'tertiary'} 
                    style={{ margin:'1rem', fontSize: '0.8rem'}} 
                    onClick={handleDownloadClick}
                    startIcon={<DownloadIcon style={{margin: '0 12px 0 0', textAlign: 'left'}}/>}>
                      Dodaj przykładową listę
                  </Button>
                  <Button 
                    size={'small'} 
                    variant={"contained"}
                    disabled={listClothes.length<0} 
                    color={'secondary'} 
                    onClick={handleResetList}
                    style={{ margin:'0.5rem 1rem 1rem 1rem'}}> 
                      RESETUJ LISTĘ
                  </Button>
              </Box>
          </Box>
          <StyledProgressBox>
                <ProgressCircle
                  radius={ 60 }
                  stroke={ 8 }
                  progress={ 34 } 
                />
                <Typography align={'center'} color={theme.palette.tertiary.main} style={{fontWeight: 500, marginBottom: '2rem'}}>Postęp Twoich przygotowań</Typography>
          </StyledProgressBox>
        
        </Box>
        
      </>
    )
};

export default GroomClothes;

