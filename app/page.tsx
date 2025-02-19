import { ContainerBlock } from "../components/ContainerBlock";
import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";
import LatestVideos from "../components/LatestVideos";
import { generateMetadata } from "./metadata";

export const metadata = generateMetadata(
  "/",
  "Fellyph Cintra - Developer and Content Creator",
  "Brazilian front-end engineer and Content Creator based in Lagos, Portugal."
);

export default function Home() {
  return (
    <ContainerBlock>
      <Hero />
      <LatestPosts />
      <LatestVideos />
    </ContainerBlock>
  );
}
