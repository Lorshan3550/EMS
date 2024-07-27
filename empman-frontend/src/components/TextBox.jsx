import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const TextBox = ({ name, control, label, rules, type = 'text', disabled = false, edit = undefined }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          variant="outlined"
          type={type}
          fullWidth
          error={!!error}
          InputLabelProps={{ shrink:  edit ? true : undefined }}
          helperText={error ? error.message : ''}
          margin="normal"
          disabled={disabled}
        />
      )}
    />
  );
};

export default TextBox;
