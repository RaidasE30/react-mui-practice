import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TooltipPage = () => (
  <Box m={6}>
    <Tooltip title="Delete" placement="right" arrow enterDelay={500} leaveDelay={500}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  </Box>
);

export default TooltipPage;
