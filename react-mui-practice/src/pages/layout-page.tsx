import React from 'react';
import {
  Box, Divider, Grid, Paper, Stack,
} from '@mui/material';

const LayoutPage = () => (
  <Paper sx={{ padding: '32px', backgroundColor: '#eeeeee' }} elevation={4}>
    <Stack
      sx={{ border: '1px solid' }}
      direction="row"
      spacing={2}
      divider={(
        <Divider
          orientation="vertical"
          flexItem
        />
    )}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '200px',
          width: '200px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        inspect element in Dev tools
      </Box>
      <Box
        display="flex"
        height="200px"
        width="200px"
        bgcolor="success.light"
        p={2}
      />
    </Stack>
    <Grid container my={4} rowSpacing={2} columnSpacing={1}>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 1</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 2</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 3</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor="primary.light" p={2}>Item 4</Box>
      </Grid>

    </Grid>
  </Paper>
);

export default LayoutPage;
