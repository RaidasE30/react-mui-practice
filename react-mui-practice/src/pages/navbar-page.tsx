import React, { useState } from 'react';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography,
} from '@mui/material';

const NavbarPage = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElement);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <Box m={4}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit">
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            POKEMONAPP
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button
              color="inherit"
              id="resources-button"
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Resources
            </Button>
            <Button color="inherit">Login</Button>
          </Stack>
          <Menu
            id="resources-menu"
            anchorEl={anchorElement}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarPage;
