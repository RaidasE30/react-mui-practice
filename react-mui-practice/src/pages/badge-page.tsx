import React from 'react';
import { Badge, Box, Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const BadgePage = () => (
  <Box m={6}>
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary" max={999}>
        <MailIcon />
      </Badge>
      <Badge variant="dot" color="primary" invisible>
        <MailIcon />
      </Badge>
    </Stack>
  </Box>
);

export default BadgePage;
