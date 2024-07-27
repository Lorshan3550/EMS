import React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import { Controller } from 'react-hook-form';

const AutoCompleteBox = ({ name, control, label, options, rules }) => {
  if (name === "department") {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            value={value || null}
            onChange={(_, newValue) => onChange(newValue)}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                variant="outlined"
                error={!!error}
                helperText={error ? error.message : ''}
                fullWidth
                margin="normal"
              />
            )}
          />
        )}
      />
    )
  }

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Autocomplete
          options={options}
          value={value || null}
          inputValue={value}

          onChange={(event, newValue) => {
            onChange(newValue);
          }}
          getOptionLabel={(option) => option.label || ''}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              variant="outlined"
              error={!!error}
              helperText={error ? error.message : ''}
              margin="normal"
            />
          )
          }
        />
      )}
    />
  );
};

export default AutoCompleteBox;
