import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestPosts from "../components/LatestPosts";
import LatestWebStories from "../components/LatestWebStories";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ContainerBlock
      title="Fellyph Cintra - Developer and Content Creator."
      description="Brazilian front-end engineer and Content Creator based in Lagos, Portugal."
    >
      <Hero />
      <LatestPosts />
      <LatestWebStories />
      <FavouriteProjects />
    </ContainerBlock>
  );
}
