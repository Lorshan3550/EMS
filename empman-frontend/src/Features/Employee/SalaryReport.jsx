import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const SalaryReport = () => {
  // Sample salary data
  const [salaryData, setSalaryData] = useState([
    { id: 1, name: 'John Doe', position: 'Software Engineer', salary: 75000, date: '2024-01-01' },
    { id: 2, name: 'Jane Smith', position: 'Project Manager', salary: 85000, date: '2024-01-02' },
    { id: 3, name: 'Sam Johnson', position: 'UX Designer', salary: 65000, date: '2024-01-03' },
    { id: 4, name: 'Alice Brown', position: 'QA Engineer', salary: 70000, date: '2024-01-04' },
  ]);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          Salary Report
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="salary table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Salary</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salaryData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.position}</TableCell>
                  <TableCell>{row.salary}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default SalaryReport;
