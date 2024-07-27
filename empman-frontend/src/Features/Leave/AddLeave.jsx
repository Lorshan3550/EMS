import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const AddLeave = () => {
  const [leaveData, setLeaveData] = useState({
    userId: '',
    leaveType: '',
    startDate: '',
    endDate: '',
    status: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeaveData({ ...leaveData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(leaveData).forEach((field) => {
      if (!leaveData[field]) {
        newErrors[field] = 'This field is required';
      }
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log(leaveData);
      // Reset form
      setLeaveData({
        userId: '',
        leaveType: '',
        startDate: '',
        endDate: '',
        status: ''
      });
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
        Add Leave
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="User ID"
              name="userId"
              value={leaveData.userId}
              onChange={handleChange}
              error={!!errors.userId}
              helperText={errors.userId}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              label="Leave Type"
              name="leaveType"
              value={leaveData.leaveType}
              onChange={handleChange}
              error={!!errors.leaveType}
              helperText={errors.leaveType}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="date"
              label="Start Date"
              name="startDate"
              InputLabelProps={{ shrink: true }}
              value={leaveData.startDate}
              onChange={handleChange}
              error={!!errors.startDate}
              helperText={errors.startDate}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type="date"
              label="End Date"
              name="endDate"
              InputLabelProps={{ shrink: true }}
              value={leaveData.endDate}
              onChange={handleChange}
              error={!!errors.endDate}
              helperText={errors.endDate}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Status"
              name="status"
              value={leaveData.status}
              onChange={handleChange}
              error={!!errors.status}
              helperText={errors.status}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddLeave;
