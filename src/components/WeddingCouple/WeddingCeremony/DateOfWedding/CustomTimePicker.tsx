import TextField, { TextFieldProps } from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import {pickTime} from 'store/timeOfWeddingSlice';

const CustomTimePicker = () => {

    const [value, setValue] = useState<Date | null>(null);
    const dispatch = useDispatch()

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        value={value}
        onChange={(newValue: SetStateAction<Date | null>) => {
          dispatch(pickTime.pickTime(newValue))
          setValue(newValue);
        }}
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default CustomTimePicker