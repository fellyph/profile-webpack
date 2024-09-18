import type { NextPage } from "next";
import ContainerBlock from "../components/ContainerBlock";
import LatestPosts from "../components/LatestPosts";
import LatestVideos from "../components/LatestVideos";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <ContainerBlock
      title="Fellyph Cintra - Developer and Content Creator."
      description="Brazilian front-end engineer and Content Creator based in Lagos, Portugal."
    >
      <Hero />
      <LatestPosts />
      <LatestVideos />
    </ContainerBlock>
  );
};

export default Home;
