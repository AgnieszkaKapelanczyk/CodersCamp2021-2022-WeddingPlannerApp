import TextField, { TextFieldProps } from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { pickDateSlice } from '../../../../store/dateOfWeddingSlice';

const DatePicker = () => {

    const [value, setValue] = useState<Date | null>(new Date());
    const dispatch = useDispatch()

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker<Date>
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(newValue: SetStateAction<Date | null>) => {
          dispatch(pickDateSlice.actions.pickDate(newValue))
          setValue(newValue);
        }}
        renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default DatePicker