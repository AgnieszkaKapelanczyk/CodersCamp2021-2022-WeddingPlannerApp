import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Divider, FormControlLabel, FormGroup, List, ListItem, styled, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { useEffect, useState } from "react";
import { theme } from 'theme/theme';
import ProgressCircle from "common/ProgressCircle/ProgressCircle";
import { toDoList } from "./tasks";
import { useAppSelector } from "store/hooks";
import { selectToDOList } from "store/progressSlice";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: '0 0 1.5rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  color: theme.palette.tertiary.main,
    '& .MuiAccordionDetails-root': {
      display: 'flex', 
      flexDirection:'row', 
      margin: '2rem 1rem',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column-reverse',
      },
    },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.tertiary.main,
  margin: '1rem',
  padding: '0.9rem 2rem',
}));

const StyledNumbersTypography = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.tertiary.main,
  margin: '1rem',
  color: theme.palette.common.white,
  fontWeight: 600,
  width: '25px',
  height: '25px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  top: '16px',
  left: '10px'
}));

const StyledListItem = styled(ListItem)(({theme})=> ({
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
  '& .MuiFormControlLabel-root': {
    cursor: 'default'
  },
  '& .MuiCheckbox-root': {
    cursor: 'default'
  }
}));

const StyledBox = styled(Box)(({theme})=> ({
  padding: '24px',
}));

const StyledProgressBox = styled(Box)(({theme})=> ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50%',
  borderRadius: '8px',
  backgroundColor: theme.palette.secondary.light,
  boxShadow: '0px 2px 35px 14px rgba(13, 13, 13, 0.04)',
  padding: '3rem 1rem',
}));

const StyledCheckbox = styled(Checkbox)(({theme})=> ({
  '& .MuiFormControlLabel-root .Mui-disabled': {
    color: theme.palette.tertiary.main
  }
}));

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.tertiary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.tertiary.main,
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.8rem',
    padding: '10px 20px',
  },
}));

export interface taskList {
  title: string
  checked: boolean
};

const ToDoList = () => {
    const todoArray = useAppSelector(selectToDOList);
    const [list, setList] = useState< toDoList | undefined >(undefined);
    const [expanded, setExpanded] = useState< string | false >(false);
    const panelTitles = Object.keys(todoArray);

    function isList(list: toDoList | undefined  | []): list is  toDoList {
      return(
        (list as toDoList) !== undefined && (list as toDoList) !== null
      ) 
    };
  
    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      }; 

    const getPanelTitle = (title: string): string => {
      let PanelTitle = '';
      
      if (title === "preparation") {
        PanelTitle = "Przygotowania wstępne"
      } else if (title === "weddingCeremony") {
        PanelTitle = "Przygotowania Ceremonii Ślubnej"
      } else if (title === "weddingParty") {
        PanelTitle = "Przygotowania Przyjęcia Weselnego"
      }

      return PanelTitle;
    };

    useEffect(()=>{
      if (isList(todoArray)) {
        setList(todoArray)
      }
    },[todoArray]);
    

  return (
    <StyledBox>
      {panelTitles.map((title,id)=>(
        <StyledAccordion expanded={expanded === `panel${id}`} sx={{ borderRadius: '8px !important'}} onChange={handleChange(`panel${id}`)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{color: `${theme.palette.tertiary.main}`}}/>}
          aria-controls={`panel${id}bh-content`}
          id={`panel${id}bh-header`}
        >
          <StyledNumbersTypography>{id+1}</StyledNumbersTypography>
          <StyledTypography>
            {getPanelTitle(title)}
          </StyledTypography>
        </AccordionSummary>
        <Divider style={{backgroundColor: `${theme.palette.tertiary.main}`}}/>
        <AccordionDetails>
            <Box display={'flex'} flexDirection={'column'} flex={2} justifyContent={'center'}>
              <Typography color={'primary'} style={{marginLeft: '1rem', color: '#343434'}}>
                Punkty na liście zostaną odhaczone automatycznie po zaznaczeniu odpowiednich elementów w poszczególnych zakładkach aplikacji. Najedź myszką na wybrany element listy, aby dowiedzieć się więcej.</Typography>
              <List>
                <FormGroup>
                  {isList(list) 
                      ? list[title].map((task,id)=>(
                        <StyledTooltip title={task.tooltip}>
                          <StyledListItem key={`listitem-${id}`} >
                                <FormControlLabel 
                                  control={
                                    <StyledCheckbox 
                                    checked = {task.checked}
                                    disabled = {!task.checked}
                                    disableRipple
                                    style={{color: `${theme.palette.tertiary.main}`}}
                                    />
                                  } 
                                  label={task.title} />
                          </StyledListItem>
                        </StyledTooltip>
                        ))
                        : null
                    }
                </FormGroup>
              </List>
            </Box>
            <StyledProgressBox>
                <ProgressCircle
                  radius={ 60 }
                  stroke={ 8 }
                  progress={ 
                    isList(list) 
                      ? (list[title].filter((task)=>(task.checked)).length)*100/list.preparation.length
                      : 0
                  } 
                />
                <Typography align={'center'} color={theme.palette.tertiary.main} style={{fontWeight: 500, marginBottom: '2rem'}}>Postęp Twoich przygotowań</Typography>
            </StyledProgressBox>
        </AccordionDetails>
      </StyledAccordion>
      ))}
    </StyledBox>
  )
}

export default ToDoList;