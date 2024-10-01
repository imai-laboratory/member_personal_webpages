'use client';
import {
  Card,
  CardContent,
  Dialog,
  DialogContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { VideoPlayer } from "@/components";

export default function BaseCard({ title, description, videoUrl, thumbnailUrl }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <div onClick={handleOpen} className="cursor-pointer">
          <VideoPlayer thumbnailUrl={thumbnailUrl} />
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

    {open && (
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
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
