import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const DateBox = ({ name, control, label,  disabled = false}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          type="date"
          fullWidth
          error={!!error}
          InputLabelProps={{ shrink: true }}
          helperText={error ? error.message : ''}
          margin="normal"
          disabled={disabled}
        />
      )}
    />
  );
};

export default DateBox;
