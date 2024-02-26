import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";

function VideoItem({video, onSelectVideo}) {
    console.log(video);
  return (
    <Grid item xs={18}>
        <Paper style={{display: "flex", alignItems: "center", cursor: "pointer"}} onClick={() => onSelectVideo(video)}>
            <img style={{marginRight: "5px"}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
            <Typography variant="subtitle1">
                <b>{video.snippet.title}</b>
            </Typography>
        </Paper>
    </Grid>
  );
}
export default VideoItem;
