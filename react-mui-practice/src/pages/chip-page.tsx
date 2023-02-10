import React from 'react';
import {
  Avatar, Box, Chip, Stack,
} from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

const ChipPage = () => {
  const [chips, setChips] = React.useState(['Chip 1', 'Chip 2', 'Chip 3']);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Box m={6}>
      <Stack direction="row" spacing={1}>
        <Chip label="chip" color="primary" size="small" icon={<FaceIcon />} />
        <Chip label="chip outlined" color="secondary" size="small" variant="outlined" avatar={<Avatar>V</Avatar>} />
        <Chip label="Click" color="success" onClick={() => alert('Clicked')} />
        <Chip label="Delete" color="error" onClick={() => alert('Clicked')} onDelete={() => alert('delete handler called')} />
        {
          chips.map((chip) => (
            <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
          ))
        }
      </Stack>
    </Box>
  );
};

export default ChipPage;
