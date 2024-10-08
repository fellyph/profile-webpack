interface YouTubeApiResponse {
  items: {
    id: { videoId: string };
    snippet: {
      title: string;
      thumbnails: {
        medium: { url: string };
      };
      publishedAt: string;
    };
  }[];
}
