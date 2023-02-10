import React from 'react';
import {
  Alert, AlertTitle, Box, Button, Stack,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const AlertPage = () => (
  <Box m={4}>
    <Stack spacing={2}>
      <Alert severity="error">Error alert</Alert>
      <Alert severity="warning">Warning alert</Alert>
      <Alert severity="info">Info alert</Alert>
      <Alert severity="success">Success alert</Alert>

      <Alert variant="outlined" severity="error">Error alert</Alert>
      <Alert variant="outlined" severity="warning">Warning alert</Alert>
      <Alert variant="outlined" severity="info">Info alert</Alert>
      <Alert variant="outlined" severity="success">Success alert</Alert>

      <Alert variant="filled" severity="error" onClose={() => alert('Close alert')}>
        <AlertTitle>Error</AlertTitle>
        Error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        Warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        Info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={<Button color="inherit" size="small">UNDO</Button>}
      >
        <AlertTitle>Success</AlertTitle>
        Success alert
      </Alert>
    </Stack>
  </Box>
);

export default AlertPage;
