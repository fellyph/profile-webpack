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
      <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center">
        Talks
      </h1>
      <div className="flex flex-col gap-10">
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold">
              DevFest 2024 - Front-end Developer
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold">
              DevFest 2024 - Front-end Developer
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </div>
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold">
              DevFest 2024 - Front-end Developer
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </div>
        </div>
      </div>
    </ContainerBlock>
  );
}
