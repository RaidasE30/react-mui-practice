import React from 'react';
import {
  Box,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import LinkData from './link-data';

type NavbarDesktopDropdownProps = {
  title: string,
  linksData: LinkData[]
};

const NavbarDesktopDropdown: React.FC<NavbarDesktopDropdownProps> = ({
  title,
  linksData,
}) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = React.useState(false);

  return (
    <Box ref={containerRef}>
      <Typography onClick={() => setOpen(!open)}>{title}</Typography>
      <Menu
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={containerRef.current}
      >
        {linksData.map(({ link, text }) => (
          <MenuItem key={link}>
            <NavLink key={link} to={link}>
              {text}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NavbarDesktopDropdown;
