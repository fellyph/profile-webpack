interface WebStory {
  id: number;
  title: { rendered: string };
  link: string;
  excerpt: {
    rendered: string;
  };
}

export default WebStory;
