import axios from "axios";

// You'll need to replace this with your actual YouTube API key and channel ID
const API_KEY = "AIzaSyDM0urCp-srXRqOFvSMXY4RI4cUgLdJeZA";
const CHANNEL_ID = "UCu6DycMkhHF64HtB9nUaQiw";

const getLatestVideos = async (): Promise<Video[]> => {
  try {
    const res = await axios.get<Video[]>(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getLatestVideos;
