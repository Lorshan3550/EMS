import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={3}>
        {/* Example Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Total Employees</Typography>
            <Typography variant="h4">120</Typography>
          </Paper>
        </Grid>
        {/* Example Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Leaves Taken</Typography>
            <Typography variant="h4">35</Typography>
          </Paper>
        </Grid>
        {/* Example Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Pending Approvals</Typography>
            <Typography variant="h4">8</Typography>
          </Paper>
        </Grid>
        {/* Example Card 4 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Upcoming Events</Typography>
            <Typography variant="h4">3</Typography>
          </Paper>
        </Grid>
        {/* Example Card 5 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Performance Reviews</Typography>
            <Typography variant="h4">15</Typography>
          </Paper>
        </Grid>
        {/* Example Card 6 */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Messages</Typography>
            <Typography variant="h4">23</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
