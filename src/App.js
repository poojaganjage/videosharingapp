import {useState} from "react";
import {Grid} from "@mui/material";
import youtube from "./api/youtube";
// import SearchBar from "./components/SearchBar";
// import VideoDetail from "./components/VideoDetail";
// import VideoList from "./components/VideoList";
import { SearchBar, VideoDetail, VideoList } from "./components";
import './App.css';

function App() {
  const[videos, setVideos] = useState([]);
  const[selectedVideo, setSelectedVideo] = useState({id: {}, snippet: {}});

  const handleSubmit = async(searchTerm) => {
    //const response = await youtube.get("search", {
    const {data: {items: videos}} = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyC-JKlOFlWkfLfdB05AWt1P3uiy-P75jzc",
        q: searchTerm
      }
    });
    //console.log(response);
    //console.log(response.data.items);
    setVideos(videos);
    setSelectedVideo(videos[0]);
  }

  return (
    <Grid style={{justifyContent: "center"}} container spacing={10}>
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            {<SearchBar onSubmit={handleSubmit} />}
          </Grid>
          <Grid item xs={8}>
            {<VideoDetail video={selectedVideo} />}
          </Grid>
          <Grid item xs={4}>
            {<VideoList videos={videos} onSelectVideo={setSelectedVideo} />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default App;
