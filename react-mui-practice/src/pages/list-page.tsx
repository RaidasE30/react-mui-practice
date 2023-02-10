import React from 'react';
import {
  Avatar,
  Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const ListPage = () => (
  <Box sx={{ width: '400px', bgcolor: '#efefef' }} m={6}>
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="List item 1" secondary="secondary text" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon>
          <ListItemAvatar>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
        </ListItemIcon>
        <ListItemText primary="List item 2" />
      </ListItem>

      <ListItem>
        <ListItemIcon>
          <ListItemAvatar>
            <Avatar>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
        </ListItemIcon>
        <ListItemText primary="List item 3" />
      </ListItem>
    </List>
  </Box>
);

export default ListPage;
