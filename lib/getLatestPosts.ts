import axios from "axios";

interface BlogData {
  blogUrl: string;
}

const getLatestPosts = async (data: BlogData): Promise<Post[] | undefined> => {
  try {
    const { blogUrl } = data;
    const res = await axios.get<Post[]>(
      `https://${blogUrl}/wp-json/wp/v2/posts?per_page=6`
    );
    return res.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export default getLatestPosts;
