import TextField, { TextFieldProps } from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { SetStateAction, useState } from 'react';


const CustomTimePicker = () => {
    const [value, setValue] = useState<Date | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        value={value}
        onChange={(newValue: SetStateAction<Date | null>) => {
          return setValue(newValue);
        }}
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default CustomTimePicker