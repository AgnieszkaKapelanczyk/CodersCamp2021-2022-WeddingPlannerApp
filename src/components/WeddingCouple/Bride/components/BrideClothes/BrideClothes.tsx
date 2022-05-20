import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, IconButton, Input, List, ListItem, styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ProgressCircle from "common/ProgressCircle/ProgressCircle";
import { theme } from "theme/theme";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { ClothesToDoArray } from "./ClothesToDoArray";
import DownloadIcon from '@mui/icons-material/Download';
import { addCloth, listItemCloth, selectListOfClothes, updateClothes } from "store/clothesSlice";
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
  width: '70%',
  '&:hover': {
    background: theme.palette.secondary.light,
    cursor: 'pointer',
  },
  '&:hover > .MuiBox-root .hiddenIcon': {
    display: 'block',
  },
  '& .MuiTypography-root': {
    display: 'flex',
    maxWidth: '90%',
    wordBreak: 'break-all',
    margin: '0.8rem 0.6rem'
  },
  '& input': {
  }
}));

const StyledIconButton = styled(IconButton)(({theme}) => ({
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

const BrideClothes = () => {
  const dispatch = useAppDispatch();
  const listClothes = useAppSelector(selectListOfClothes);

  const [toDoArray, setClothesArray] = useState<listItemCloth[]>([]);
  const [newValue, setValue] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [editingId, setEditingId] = useState<number | undefined>(undefined);

  function isNotUndefined(editingId: number | undefined): editingId is number {
    return(
      (editingId as number) !== undefined 
    ) 
  };

  const handleDownloadClick = () => {
      dispatch(updateClothes(ClothesToDoArray));
      toast.success('Wczytałeś przykładową listę ubrań!');
  };

  const handleResetList = () => {
      dispatch(updateClothes([]));
  };

  const handleRemoveItem = (event: React.MouseEvent<HTMLButtonElement>) => {
      const newList: listItemCloth[] = [...toDoArray];
      newList.splice(parseInt(event.currentTarget.value),1);
      dispatch(updateClothes(newList));
  };

  const handleEditItem = (event: React.MouseEvent<HTMLButtonElement>) => {
 
  };

  const handleChange = (event: React.SyntheticEvent<Element, Event>, checked: boolean) => {
      const value = (event.target as HTMLInputElement).value;
      const name = (event.target as HTMLInputElement).name;
      const id = (event.target as HTMLInputElement).id;
      const newList: listItemCloth[] = [...toDoArray];
      const newItem: listItemCloth = {title: name, checked: value==='true' ? false : true};
      newList.splice(parseInt(id), 1, newItem)
      dispatch(updateClothes(newList));
  };

  useEffect(()=>{
      setClothesArray(listClothes);
  },[listClothes]);

  useEffect(()=> {
      setProgress(Math.round((toDoArray.filter(el=>el.checked)).length*100/(toDoArray.length)));
  },[toDoArray]);

  useEffect(()=> {
    if (progress === 100) {
      
    };
  },[progress]);

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
                    onKeyPress={(ev) => {
                      if (ev.key === 'Enter' || ev.code === "NumpadEnter") {
                        ev.preventDefault();
                        dispatch(addCloth({title: newValue.trim(), checked: false}));
                        setValue("");
                      }
                    }}
                    variant="outlined"
                    value={newValue}
                  />
                <Button 
                    variant={"contained"} 
                    color={'tertiary'} 
                    style={{width:'260px', margin:'1rem'}} 
                    disabled={newValue.trim() === ""}
                    onClick = {() => {
                        dispatch(addCloth({title: newValue.trim(), checked: false}));
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
                          sx={{paddingRight: '2rem'}}
                          key={`formControllLabel-${id}`}
                          control={
                              <StyledCheckboxClothes 
                                id = {`${id}`}
                                checked={el.checked}
                                onChange={handleChange}
                                icon={<CloseIcon/>}
                                value={el.checked}
                                name={el.title}
                                key={`checkbox-${id}`}/>
                          }
                          label={ el.title }
                        />
                        <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'}>
                        <StyledIconButton
                            className={'hiddenIcon'} 
                            aria-label="edit"
                            value={id}
                            onClick={handleEditItem}>
                            <StyledTooltip title={"Edytuj"}>
                                <EditIcon /> 
                            </StyledTooltip>
                        </StyledIconButton>
                          <StyledIconButton 
                            className={'hiddenIcon'} 
                            aria-label="delete"
                            value={id}
                            onClick={handleRemoveItem}>
                               <StyledTooltip title={"Usuń z listy"}>
                                  <DeleteIcon /> 
                              </StyledTooltip>
                          </StyledIconButton>
                        </Box>
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
                    disabled={toDoArray === ClothesToDoArray}
                    style={{ margin:'1rem', fontSize: '0.8rem'}} 
                    onClick={handleDownloadClick}
                    startIcon={<DownloadIcon style={{margin: '0 12px 0 0', textAlign: 'left'}}/>}>
                      Wczytaj przykładową listę
                  </Button>
                  <Button 
                    size={'small'} 
                    variant={"contained"}
                    disabled={toDoArray.length===0} 
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
                  progress={ progress ? progress : 0 } 
                />
                <Typography align={'center'} color={theme.palette.tertiary.main} style={{fontWeight: 500, marginBottom: '2rem'}}>Postęp Twoich przygotowań</Typography>
          </StyledProgressBox>
        
        </Box>
        
      </>
    )
};

export default BrideClothes;

