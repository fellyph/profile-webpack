import axios from "axios";

// You'll need to replace this with your actual YouTube API key and channel ID
const API_KEY = "AIzaSyDM0urCp-srXRqOFvSMXY4RI4cUgLdJeZA";
const CHANNEL_ID = "UCPaufJocHYVHj44iwXG95PA";

const getLatestVideos = async (): Promise<Video[]> => {
  try {
    const res = await axios.get<YouTubeApiResponse>(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`
    );
    return res.data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default getLatestVideos;
