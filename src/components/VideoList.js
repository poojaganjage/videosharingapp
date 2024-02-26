import React from "react";
import {Grid} from "@mui/material";
import VideoItem from "./VideoItem";

const VideoList = ({videos, onSelectVideo}) => {
    console.log(videos);
    const listOfVideos = videos.map((video) => {
       return <VideoItem key={video.id.videoId} video={video} onSelectVideo={onSelectVideo} />
    });
    console.log(listOfVideos);
    return (
        <Grid container spacing={2}>
            {listOfVideos}
        </Grid>
    );
}
export default VideoList;
