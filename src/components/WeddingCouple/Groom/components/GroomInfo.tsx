import { Box, Button, Chip, IconButton, styled, Typography } from "@mui/material";
import Avatar from 'assets/img/kasperczyk_avatar.jpg';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EditIcon from '@mui/icons-material/Edit';
import { theme } from "theme/theme";

const StyledTypography = styled(Typography)(({theme}) => ({
    '&:hover': {
        cursor: 'pointer',
        color:  `${theme.palette.tertiary.main}`, 
    },
    '&:hover > .MuiSvgIcon-root': {
        cursor: 'pointer',
        backgroundColor:  `${theme.palette.tertiary.main}`, 
        color:  `${theme.palette.common.white}`, 
    },
    '> .MuiSvgIcon-root': {
        color: `${theme.palette.tertiary.main}`, 
        position:'relative', 
        top: '10px', 
        fontSize:'1.2rem',
        marginRight:'10px',
        borderRadius: '50%',
        padding: '0.3rem',
            '&:hover': {
                cursor: 'pointer',
                backgroundColor:  `${theme.palette.tertiary.main}`, 
                color:  `${theme.palette.common.white}`, 
            },
            [theme.breakpoints.down('md')]: {
                marginRight: '3px',
             },
    },
    [theme.breakpoints.down('sm')]: {
       fontSize: '0.8rem',
    },   
}));

const UserName = styled(Typography)(({theme}) => ({
    fontSize: '1.8rem',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.4rem',
     },  
}));

const StyledIconButton = styled(IconButton)(({theme}) => ({
    position: 'relative', 
    top: '-18px',
    left: '130px', 
    zIndex: 2,
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)', 
    },
    [theme.breakpoints.down('md')]: {
        top: '50px',
        left: '50px',
    },
  }));

  const StyledBox = styled(Box)(({theme})=> ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0',
        justifyContent: 'flex-start',
    },
    [theme.breakpoints.down('lg')]: {
        width: '100%'
    },
  }));

  const InfoBox = styled(Box)(({theme})=> ({
    padding: '0 1rem',
    flexGrow: 3,
    margin: '0 1rem',
    [theme.breakpoints.down('sm')]: {
        padding: 0,
        margin: '2rem 0 0 0',
    },
  }));

  const StyledButton = styled(Button)(({theme})=> ({
        marginRight: '2rem',
        [theme.breakpoints.down('md')]: {
            margin: '2rem'
        },
    }));

const GroomInfo = () => {
    return (
        <StyledBox>
            <StyledIconButton 
              aria-label="change photo" 
              style={{ color: `${theme.palette.common.white}` }}
              title='Edytuj zdjęcie' >
              <EditIcon style= {{fontSize: '1.7rem', borderRadius: '50%', backgroundColor: `${theme.palette.tertiary.main}`, padding:'0.6rem'}}/>
            </StyledIconButton>
            <img src={Avatar} height={'120px'} alt="" style={{borderRadius: '50%', objectFit: 'cover', width: '120px'}}/>
            <InfoBox>
                <UserName>
                    Michał Kasperczyk 
                    <Chip 
                        label="potwierdzony narzeczony" 
                        style={{
                            fontFamily: 'Lato', 
                            backgroundColor:`${theme.palette.tertiary.main}`,
                            color: `${theme.palette.common.white}`,
                            marginLeft: '1rem',
                            position: 'relative',
                            top: '-4px'
                        }}
                    />
                </UserName>
                <StyledTypography><EmailIcon/>michalkasperczyk@gmail.com</StyledTypography>
                <StyledTypography><PhoneIcon/>675 566 777</StyledTypography>
            </InfoBox>
            <Box>
                <StyledButton variant="outlined" color={'tertiary'}>Edytuj</StyledButton>
            </Box>
        </StyledBox>
    )
};

export default GroomInfo;