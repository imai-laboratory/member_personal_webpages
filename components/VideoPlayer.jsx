import React from 'react';
import { CardMedia, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function VideoPlayer({ thumbnailUrl }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <CardMedia
        component="img"
        height="140"
        image={thumbnailUrl}
        alt="thumbnail"
      />
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
      </IconButton>
    </div>
  );
};
