import React, { useState } from 'react';
import {
  Box, Drawer, IconButton, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box m={4}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box mt={10} p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
};

export default DrawerPage;
