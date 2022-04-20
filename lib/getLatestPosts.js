import axios from "axios";

const getLatestPosts = async (data) => {
  try {
    const blogUrl = data.blogUrl;
    const res = await axios.get(
      `https://${blogUrl}/wp-json/wp/v2/posts?per_page=6`
    );
    let posts = res.data;
    let latestSixPosts = res.data;
    return latestSixPosts;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestPosts;
