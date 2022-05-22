import { TextField, Button, Box} from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useAppDispatch } from "store/hooks";
import { openDialog, FormType } from 'store/dialogSlice';


const useStyles = makeStyles({
  field: {
    marginTop: 15,
    marginBottom: 20,
  }
});

export const RejestracjaEmail = () => {
  const dispatch = useAppDispatch();

  const classes = useStyles();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    const value = event.target.value;
    setData({
      ...data,
      [event.target.name.trim()]: value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(openDialog({ formType: FormType.zalozonyProfil }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField sx={{marginBottom:'10px'}}
        className={classes.field}
        type="text"
        name="firstName"
        label="Imię"
        variant="outlined"
        required
        fullWidth
        error={data.firstName ? data.firstName.trim().length < 3 : true}
        value={data.firstName}
        onChange={handleChange}
        helperText="Minimum 3 litery"
      />

      <TextField sx={{marginBottom:'10px'}}
        className={classes.field}
        type="text"
        name="lastName"
        label="Nazwisko"
        variant="outlined"
        required
        fullWidth
        error={data.lastName ? false : true}
        value={data.lastName}
        onChange={handleChange}
        helperText="Minimum 3 litery"
      />


      <TextField sx={{marginBottom:'20px'}}
        className={classes.field}
        type="email"
        name="email"
        label="Email"
        variant="outlined"
        required
        fullWidth
        error={data.email ? false : true}
        value={data.email}
        onChange={handleChange}
      />

      <TextField sx={{marginBottom:'20px'}}
        className={classes.field}
        type="password"
        name="password"
        label="Hasło"
        variant="outlined"
        required
        fullWidth
        error={data.password? data.password.trim().length < 5 : true}
        value={data.password}
        onChange={handleChange}
        helperText="Co najmniej 8 znaków, jedna wielka litera i jedna cyfra."
      />

<Box sx={{display:"flex", justifyContent:'center'}}>
      <Button
        type="submit"
        className={classes.field}
        color={'primary'}
        variant="contained"
        size="large"
       
      >
        ZAREJESTRUJ SIĘ
      </Button>
      </Box>
      </form>
  );
};

export default RejestracjaEmail;