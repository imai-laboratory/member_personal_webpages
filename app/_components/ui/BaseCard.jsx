'use client';
import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { VideoThumbnail } from "@/app/_components";

export default function BaseCard({ title, description, videoUrl, thumbnailUrl }) {
  const [open, setOpen] = useState(false);
  const toggleDialog = () => setOpen(prev => !prev);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <div onClick={toggleDialog} className="cursor-pointer">
          <VideoThumbnail isVideo={!!videoUrl} thumbnailUrl={thumbnailUrl} />
        </div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>

      {open && videoUrl && (
        <Dialog open={open} onClose={toggleDialog} maxWidth="md" fullWidth>
          <DialogContent>
            <iframe
              width="100%"
              height="400"
              src={videoUrl}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
