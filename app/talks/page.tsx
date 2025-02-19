import { ContainerBlock } from "../../components/ContainerBlock";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fellyph Cintra - Talks",
  description:
    "Brazilian front-end engineer and Content Creator based in Lagos, Portugal.",
};

export default function Talks() {
  return (
    <ContainerBlock>
      <h1>Talks</h1>
    </ContainerBlock>
  );
}
