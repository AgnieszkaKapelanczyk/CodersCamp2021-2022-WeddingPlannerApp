import { TextField, Button, Typography, Link, styled, Box } from  "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { openDialog, FormType } from '../../store/dialogSlice';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    field: {
      marginTop: 15,
      marginBottom: 20,
    },
    text2: {
      alignSelf: 'center',
      justifyContent: 'center',
    },
  });


export const LoginDialog = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    // const responseStatus = useSelector(selectResponseStatus);
    const [data, setData] = useState({
      email: "",
      password: ""
    });
  
    // const handleChange = (e) => {
        const handleChange=(e: React.ChangeEvent<any>): void => {
      const value = e.target.value;
      setData({
        ...data,
        [e.target.name.trim()]: value
      });
    };
  
    const handleSubmit = (e: React.ChangeEvent<any>) => {
      e.preventDefault();
    //   dispatch(fetchLoginData(data)); 
    console.log(data)  
    };
  
    // if(responseStatus === 'succeeded log in (:') {
    //   dispatch(login({ user: data.login }));
    //   dispatch(openDialog({ formType: FormType.zalogowano}));
    // }  
  
    return (
      <form onSubmit={handleSubmit}>
        <TextField 
          className={classes.field}
          type="text"
          name="email"
          label="Email"
          variant="outlined"
          required
          fullWidth
          error={data.email ? false : true}
          value={data.email}
          onChange={handleChange}
        />
  
        <TextField 
          className={classes.field}
          type="password"
          name="password"
          label="Hasło"
          variant="outlined"
          required
          fullWidth
          error={data.password ? false : true}
          onChange={handleChange}
        />

        <Box sx={{display:"flex", justifyContent:'center' }}>
        <Button 
        type="submit"        
        color="primary" variant="contained" size="large"
        onClick={()=> {dispatch(openDialog({formType:FormType.zalogowano}))}}
        className={classes.field} >
          Zaloguj się
        </Button>
        </Box>

        <Typography align="center">
          <Link
            component="button"
            variant="body1"
            onClick={() => dispatch(openDialog({ formType: FormType.rejestracjaEmail }))}
          >
            <Typography variant="h4" style={{color:"primary"}}>Jeśli nie masz konta, zarejestruj się tutaj</Typography>
          </Link>
        </Typography>
      </form>
    );
  };
  
  export default LoginDialog;

  