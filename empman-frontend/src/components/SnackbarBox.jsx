import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const SnackbarBox = ({ openSnackbar , handleSnackbarClose, message, severity }) => {
  return (
    <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
          <Alert
            onClose={handleSnackbarClose}
            severity={severity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
        </Snackbar>
  )
}

export default SnackbarBox