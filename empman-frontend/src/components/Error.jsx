import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import PropTypes from 'prop-types';

const Error = ({ title, message, onRetry, onGoHome }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="div" gutterBottom>
        {title || 'Error'}
      </Typography>
      <Typography variant="h6" component="div" color="textSecondary" gutterBottom>
        {message || 'Something went wrong. Please try again later.'}
      </Typography>
      <Box sx={{ mt: 4 }}>
        {onRetry && (
          <Button variant="contained" color="primary" onClick={onRetry} sx={{ mr: 2 }}>
            Retry
          </Button>
        )}
        {onGoHome && (
          <Button variant="outlined" color="primary" onClick={onGoHome}>
            Go Home
          </Button>
        )}
      </Box>
    </Container>
  );
};

Error.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onRetry: PropTypes.func,
  onGoHome: PropTypes.func,
};

export default Error;
