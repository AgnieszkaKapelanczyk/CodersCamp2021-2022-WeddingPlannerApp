import TextField, { TextFieldProps } from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { SetStateAction, useState } from 'react';

const DatePicker = () => {

    const [value, setValue] = useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker<Date>
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue: SetStateAction<Date | null>) => {
          setValue(newValue);
        }}
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default DatePicker