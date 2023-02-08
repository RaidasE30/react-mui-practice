import React from 'react';
import { Typography } from '@mui/material';

const TypographyPage = () => (
  <div>
    <Typography variant="h1">h1 Heading</Typography>
    <Typography variant="h2">h2 Heading</Typography>
    <Typography variant="h3">h3 Heading</Typography>
    <Typography variant="h4" component="h1" gutterBottom>h4 Heading</Typography>
    <Typography variant="h5">h5 Heading</Typography>
    <Typography variant="h6">h6 Heading</Typography>

    <Typography variant="subtitle1">subtitle 1</Typography>
    <Typography variant="subtitle2">subtitle 2</Typography>

    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, sapiente.</Typography>
    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, totam.</Typography>

  </div>
);

export default TypographyPage;
