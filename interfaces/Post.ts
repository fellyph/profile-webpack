interface Post {
  id: number;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
}

export default Post;
