import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FlexboxInGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} >
        <Grid item sm={8} >
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Item sm={5}>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Box>
        </Grid>
        <Grid item xs={12} >
          <Box display="flex" flexDirection="row-reverse" justifyContent="center" alignItems="flex-start">
            <Item>Item A</Item>
            <Item>Item B</Item>
            <Item>Item C</Item>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" flexDirection="column" justifyContent="space-around" alignItems="stretch" height="200px">
            <Item>Item X</Item>
            <Item>Item Y</Item>
            <Item>Item Z</Item>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
            <Box p={1} bgcolor="grey.300" flexBasis="48%">Item 1</Box>
            <Box p={1} bgcolor="grey.300" flexBasis="48%">Item 2</Box>
            <Box p={1} bgcolor="grey.300" flexBasis="48%">Item 3</Box>
            <Box p={1} bgcolor="grey.300" flexBasis="48%">Item 4</Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
