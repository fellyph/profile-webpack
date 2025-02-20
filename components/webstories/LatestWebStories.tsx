import React, { useEffect, useState } from "react";
import userData from "@constants/data"; // Import the WebStory type
import getLatestWebStories from "@lib/getLatestWebStories";
import WebStoryCard from "./WebStoryCard";
import WebStory from "interfaces/WebStory";
import SectionHeadder from "components/SectionHeader";

interface LatestWebStoriesProps {
  blogstories: WebStory[];
}

export default function LatestWebStories({
  blogstories,
}: LatestWebStoriesProps) {
  const [stories, setStories] = useState<WebStory[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      const latestStories = await getLatestWebStories(userData);
      setStories(latestStories || []);
    };
    fetchStories();
  }, []);

  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <SectionHeadder
          title="Latest WebStories"
          url="https://blog.fellyph.com.br"
          urlTitle="View all Stories"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-up-right-square"
            stroke="4"
            strokeWidth="4"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
            />
          </svg>
        </SectionHeadder>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
        {stories &&
          stories.map((latestStory, idx) => (
            <WebStoryCard latestPost={latestStory} key={idx} />
          ))}
      </div>
    </section>
  );
}
