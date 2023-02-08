import React, { useState } from 'react';
import { Rating, Stack } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RatingPage = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });
  const handleChange = (_event: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        // readOnly prop displays set rating provided in useState initial value
        // highlightSelectedOnly prop highlights ony 1 element
          // (in case you want to rate by emojis ☹️ 😐 🙂)
      />
    </Stack>
  );
};

export default RatingPage;
