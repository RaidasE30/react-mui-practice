import React, { useState } from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

const SwitchPage = () => {
  const [checked, setChecked] = useState(false);
  console.log({ checked });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        control={(
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        )}
        label="Dark mode"
      />
    </Box>
  );
};

export default SwitchPage;
