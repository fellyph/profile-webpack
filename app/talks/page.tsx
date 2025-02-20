import SectionHeadder from "components/SectionHeader";
import { ContainerBlock } from "../../components/ContainerBlock";

import { Metadata } from "next";
import Talk from "interfaces/Talk";
import TalksCard from "components/TalksCard";

export const metadata: Metadata = {
  title: "Fellyph Cintra - Talks",
  description:
    "Brazilian front-end engineer and Content Creator based in Lagos, Portugal.",
};

const talks: Talk[] = [
  {
    talk: "AI for Entrepreneurs",
    conference: "DevFest 2024 Munich",
    date: "2024-10-10",
    country: "Germany",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/images/talks/gdg-lagos-2025.jpg",
  },
  {
    talk: "AI for Entrepreneurs",
    conference: "DevFest 2024 Mons",
    date: "2024-10-10",
    country: "Belgium",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/images/talks/gdg-lagos-2025.jpg",
  },
  {
    talk: "AI for Entrepreneurs",
    conference: "DevFest 2024 Porto",
    date: "2024-10-10",
    country: "Portugal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/images/talks/devfest-2024.png",
  },
  {
    talk: "AI for Entrepreneurs",
    conference: "DevFest 2024 Isla Gaia",
    date: "2024-10-10",
    country: "Portugal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/images/talks/gdg-lagos-2025.jpg",
  },
  {
    talk: "AI for Entrepreneurs",
    conference: "DevFest 2024 Faro",
    date: "2024-10-10",
    country: "Portugal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/images/talks/devfest-2024.png",
  },
  {
    talk: "Chrome AI",
    conference: "DevFest 2024 Braga",
    date: "2024-10-10",
    country: "Portugal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/images/talks/gdg-lagos-2025.jpg",
  },
  {
    talk: "Chrome AI",
    conference: "Algarve TechHub Summit",
    date: "2024-10-10",
    country: "Portugal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/images/talks/gdg-lagos-2025.jpg",
  },
  {
    talk: "Chrome AI",
    conference: "Algarve TechHub Summit",
    date: "2024-10-10",
    country: "Portugal",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    image: "/images/talks/gdg-lagos-2025.jpg",
  },
];

export default function Talks() {
  return (
    <ContainerBlock>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <SectionHeadder title="Talks" />
        <div className="flex flex-col gap-10">
          {talks.map((talk, index) => (
            <TalksCard key={index} {...talk} />
          ))}
        </div>
      </div>
    </ContainerBlock>
  );
}
