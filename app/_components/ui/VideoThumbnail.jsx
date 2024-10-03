import React from 'react';
import { CardMedia, IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function VideoThumbnail({ isVideo, thumbnailUrl, height = 140, iconSize = 50 }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <CardMedia
        component="img"
        height={height}
        image={thumbnailUrl}
        alt="thumbnail"
      />
      {isVideo && (
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
          <PlayCircleOutlineIcon sx={{ fontSize: iconSize }} />
        </IconButton>
      )}
    </div>
  );
}
