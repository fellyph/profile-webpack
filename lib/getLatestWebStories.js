import axios from "axios";

const getLatestWebStories = async (data) => {
  try {
    const blogUrl = data.blogUrl;
    const res = await axios.get(
      `https://${blogUrl}/wp-json/web-stories/v1/web-story?per_page=6`
    );
    let posts = res.data;
    let latestSixPosts = res.data;
    return latestSixPosts;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestWebStories;
