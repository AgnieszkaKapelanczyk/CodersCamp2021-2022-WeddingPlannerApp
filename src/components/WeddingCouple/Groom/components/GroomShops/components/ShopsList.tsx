import { Box, Chip, List, ListItem, styled, ListItemAvatar, ListItemButton, ListItemText, Rating, Typography, IconButton } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import ShopFoto1 from 'assets/img/groomshop1.jpg';
import ShopFoto2 from 'assets/img/groomshop2.jpg';
import ShopFoto3 from 'assets/img/groomshop3.jpg';
import { theme } from "theme/theme";
import FacebookIcon from 'assets/icon/facebook-f-brands.svg';
import InstagramIcon from 'assets/icon/instagram-brands.svg';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/MailOutline';
import MarkerIcon from '@mui/icons-material/Room';
import WebsiteIcon from '@mui/icons-material/Language';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const StyledChipPrimary = styled(Chip)(({theme})=>({
    fontFamily: 'Lato', 
    backgroundColor:`${theme.palette.primary.main}`,
    color: `${theme.palette.common.white}`,
    marginLeft: '1rem',
    position: 'relative',
    top: '-4px',
    [theme.breakpoints.down('md')]: {
        marginLeft: 0
    },
  }));

  const StyledChipSecondary = styled(Chip)(({theme})=>({
    fontFamily: 'Lato', 
    backgroundColor:`${theme.palette.secondary.main}`,
    color: `${theme.palette.common.black}`,
    marginLeft: '1rem',
    position: 'relative',
    top: '-4px',
    [theme.breakpoints.down('md')]: {
        marginLeft: 0
    },
  }));

  const StyledChipTertiary = styled(Chip)(({theme})=>({
    fontFamily: 'Lato', 
    backgroundColor: theme.palette.tertiary.main,
    color: theme.palette.common.white,
    marginLeft: '1rem',
    position: 'relative',
    top: '-4px',
    [theme.breakpoints.down('md')]: {
        marginLeft: 0
    },
  }));

  const StyledIconButton = styled(IconButton)(({theme})=>({
    backgroundColor: theme.palette.tertiary.main,
    margin: '0.25rem',
    '&:hover': {
        backgroundColor: theme.palette.tertiary.dark,
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

const ShopsList = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} flexWrap={'wrap'}>
            <List>
                <ListItem sx={{paddingLeft: '0'}}>
                    <ListItemButton sx={{backgroundColor: `${theme.palette.secondary.light}`}}>
                        <ListItemAvatar>
                            <Avatar
                            alt={``}
                            src={ShopFoto1}
                            sx={{
                                borderRadius: '8px',
                                height: '210px',
                                width: '260px',
                                marginRight: '1rem'
                            }}
                            />
                        </ListItemAvatar>
                        <ListItemText primary={
                            <>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography>Wrocław, Igielna 6 <Rating style={{
                                position: 'relative', top:'5px'
                                }} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> (10)</Typography>
                                <List>
                                    <StyledTooltip title={'Facebook'}>
                                        <StyledIconButton >
                                            <img src={FacebookIcon} className={'svgSocialIcon'} alt={'facebook contact'} style={{height: '16px', width: '16px'}}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Instagram'}>
                                        <StyledIconButton>
                                            <img src={InstagramIcon} className={'svgSocialIcon'} alt={'facebook contact'} style={{height: '16px',}}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Zadzwoń'}>
                                        <StyledIconButton>
                                        <PhoneIcon  
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Mail'}>
                                        <StyledIconButton>
                                            <MailIcon 
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Strona'}>
                                        <StyledIconButton>
                                            <WebsiteIcon 
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Zobacz na mapie'}>
                                        <StyledIconButton>
                                            <MarkerIcon 
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                </List>
                            </Box>
                            <Typography variant={'h3'} style={{margin:'1rem 0'}}>Lavard</Typography>
                            <Typography variant={'body2'}>Salon sukien ślubnych obecny na polskim rynku już 10 lat.  Wszystkie zamówienia realizowane są terminowo, wyróżnia nas fachowa wiedza i doświadczenie.</Typography>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} margin={'1rem 1rem 1rem 0'}>
                                    <StyledChipPrimary label="szycie na miarę" sx={{marginLeft: '0'}} />
                                    <StyledChipSecondary label="pełna rozmiarówka" />
                                    <StyledChipSecondary label="usługi krawieckie" />
                            </Box>
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'}>
                                    <Typography variant={'caption'}>CZAS OCZEKIWANIA:</Typography>
                                    <StyledChipTertiary label="16 miesięcy" />
                            </Box>
                            </>
                        } />
                    </ListItemButton>
                </ListItem>
                <ListItem sx={{paddingLeft: '0'}}>
                    <ListItemButton sx={{backgroundColor: `${theme.palette.secondary.light}`}}>
                        <ListItemAvatar>
                            <Avatar
                            alt={``}
                            src={ShopFoto2}
                            sx={{
                                borderRadius: '8px',
                                height: '210px',
                                width: '260px',
                                marginRight: '1rem'
                            }}
                            />
                        </ListItemAvatar>
                        <ListItemText primary={
                            <>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography>Wrocław, Rymarska 2 <Rating style={{
                                position: 'relative', top:'5px'
                                }} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> (10)</Typography>
                                <List>
                                    <StyledTooltip title={'Facebook'}>
                                        <StyledIconButton >
                                            <img src={FacebookIcon} className={'svgSocialIcon'} alt={'facebook contact'} style={{height: '16px', width: '16px'}}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Instagram'}>
                                        <StyledIconButton>
                                            <img src={InstagramIcon} className={'svgSocialIcon'} alt={'facebook contact'} style={{height: '16px',}}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Zadzwoń'}>
                                        <StyledIconButton>
                                        <PhoneIcon  
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Mail'}>
                                        <StyledIconButton>
                                            <MailIcon 
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Strona'}>
                                        <StyledIconButton>
                                            <WebsiteIcon 
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Zobacz na mapie'}>
                                        <StyledIconButton>
                                            <MarkerIcon 
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                </List>
                            </Box>
                            <Typography variant={'h3'} style={{margin:'1rem 0'}}>Exlusive Suits</Typography>
                            <Typography variant={'body2'}>Salon sukien ślubnych obecny na polskim rynku już 10 lat.  Wszystkie zamówienia realizowane są terminowo, wyróżnia nas fachowa wiedza i doświadczenie.</Typography>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} margin={'1rem 1rem 1rem 0'}>
                                    <StyledChipPrimary label="szycie na miarę" sx={{marginLeft: '0'}} />
                                    <StyledChipSecondary label="pełna rozmiarówka" />
                                    <StyledChipSecondary label="usługi krawieckie" />
                            </Box>
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'}>
                                    <Typography variant={'caption'}>CZAS OCZEKIWANIA:</Typography>
                                    <StyledChipTertiary label="16 miesięcy" />
                            </Box>
                            </>
                        } />
                    </ListItemButton>
                </ListItem>
                <ListItem sx={{paddingLeft: '0'}}>
                    <ListItemButton sx={{backgroundColor: `${theme.palette.secondary.light}`}}>
                        <ListItemAvatar>
                            <Avatar
                            alt={``}
                            src={ShopFoto3}
                            sx={{
                                borderRadius: '8px',
                                height: '210px',
                                width: '260px',
                                marginRight: '1rem'
                            }}
                            />
                        </ListItemAvatar>
                        <ListItemText primary={
                            <>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography>Wrocław, Komadorska 2 <Rating style={{
                                position: 'relative', top:'5px'
                                }} name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> (10)</Typography>
                                <List>
                                    <StyledTooltip title={'Facebook'}>
                                        <StyledIconButton >
                                            <img src={FacebookIcon} className={'svgSocialIcon'} alt={'facebook contact'} style={{height: '16px', width: '16px'}}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Instagram'}>
                                        <StyledIconButton>
                                            <img src={InstagramIcon} className={'svgSocialIcon'} alt={'facebook contact'} style={{height: '16px',}}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Zadzwoń'}>
                                        <StyledIconButton>
                                        <PhoneIcon  
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Mail'}>
                                        <StyledIconButton>
                                            <MailIcon 
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Strona'}>
                                        <StyledIconButton>
                                            <WebsiteIcon 
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                    <StyledTooltip title={'Zobacz na mapie'}>
                                        <StyledIconButton>
                                            <MarkerIcon 
                                                className={'svgSocialIcon'} 
                                                style={{
                                                    color: `${theme.palette.common.white}`, 
                                                    fontSize:'1.1rem',
                                                    }}/>
                                        </StyledIconButton>
                                    </StyledTooltip>
                                </List>
                            </Box>
                            <Typography variant={'h3'} style={{margin:'1rem 0'}}>Lancerto</Typography>
                            <Typography variant={'body2'}>Salon sukien ślubnych obecny na polskim rynku już 10 lat.  Wszystkie zamówienia realizowane są terminowo, wyróżnia nas fachowa wiedza i doświadczenie.</Typography>
                            <Box display={'flex'} flexDirection={'row'} alignItems={'center'} margin={'1rem 1rem 1rem 0'}>
                                    <StyledChipPrimary label="szycie na miarę" sx={{marginLeft: '0'}} />
                                    <StyledChipSecondary label="pełna rozmiarówka" />
                                    <StyledChipSecondary label="usługi krawieckie" />
                            </Box>
                            <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'}>
                                    <Typography variant={'caption'}>CZAS OCZEKIWANIA:</Typography>
                                    <StyledChipTertiary label="16 miesięcy" />
                            </Box>
                            </>
                        } />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
};

export default ShopsList;