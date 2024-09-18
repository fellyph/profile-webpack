import axios from "axios";

interface BlogData {
  blogUrl: string;
}

const getLatestWebStories = async (
  data: BlogData
): Promise<WebStory[] | undefined> => {
  try {
    const { blogUrl } = data;
    const res = await axios.get<WebStory[]>(
      `https://${blogUrl}/wp-json/web-stories/v1/web-story?per_page=6`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export default getLatestWebStories;
