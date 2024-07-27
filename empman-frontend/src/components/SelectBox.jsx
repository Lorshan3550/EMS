import React from 'react';
import { TextField, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';

const SelectBox = ({ name, control, label, rules, options }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field : {onChange, value, ...field}, fieldState: { error } }) => (
        <TextField
          {...field}
          value={value || ''}
          select
          fullWidth
          label={label}
          variant="outlined"
          onChange={(e) => onChange(e.target.value)}
          error={!!error}
          helperText={error ? error.message : ''}
          margin="normal"
        >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default SelectBox;
