import axios from "axios";

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

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
