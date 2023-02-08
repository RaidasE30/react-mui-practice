import React from 'react';
import {
  Box, Button, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';

const CardPage = () => (
  <Box width="300px">
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          React
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Assumenda consectetur debitis dignissimos dolore,
          earum inventore, iusto modi officia omnis perspiciatis
          quisquam quos recusandae veritatis. A?
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn more</Button>
      </CardActions>
    </Card>
  </Box>
);

export default CardPage;
