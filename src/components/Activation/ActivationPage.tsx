import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useAppDispatch } from "store/hooks";
import { FormType, openDialog } from "store/dialogSlice";
import bg from 'assets/img/bg1.jpg'
import { theme } from "theme/theme";
import { fetchActivateToken } from "store/userSlice";

const ActivationPage = () => {
    const dispatch = useAppDispatch();
    const { activationToken } = useParams();
    const token = activationToken?.toString();
    const [activeToken, setToken] = useState<string | undefined>(undefined);

    function isNotUndefined(token: string | undefined): token is string {
        return(
          (token as string) !== undefined 
        ) 
      };

    useEffect(()=>{
        if (token) {
            setToken(token);
            sessionStorage.setItem('token', token);
        }
    },[token]);

    useEffect(()=>{
        if (isNotUndefined(activeToken)) {
            dispatch(fetchActivateToken(activeToken));
        }
    },[activeToken]);

    return (
        <Box 
            display={"flex"} 
            flexDirection={'column'} 
            justifyContent={'center'} 
            alignItems={'center'} 
            sx={{backgroundImage:`url(${bg})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '700px'}}>
                <Box sx={{
                    backgroundColor: `${theme.palette.common.white}`, 
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '2rem 3rem'
                     }}>
                    <Typography variant="h3" color={'primary'} my={4} sx={{fontSize:'2rem'}}>Gratulacje!</Typography>
                    <Typography paragraph>Twoje konto jest już aktywne. Zaloguj się, aby móc w pełni korzystać z aplikacji. </Typography>
                    <Button variant={'contained'} onClick={() => dispatch(openDialog({ formType: FormType.loginDialog }))} endIcon={<ArrowCircleRightIcon/>} sx={{margin: '1rem 1rem'}}>Idę się zalogować</Button>
                </Box>
        </Box>
    )
};

export default ActivationPage;