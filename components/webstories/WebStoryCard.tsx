import WebStory from "interfaces/WebStory";

interface WebStoryCardProps {
  latestPost: WebStory;
}

const WebStoryCard: React.FC<WebStoryCardProps> = ({ latestPost }) => {
  return (
    <div className="github-repo">
      <div className="web-story flex flex-col xl:flex-row shadow hover:shadow-md w-full dark:bg-gray-700 bg-white rounded-lg overflow-hidden cursor-pointer">
        <div className="relative p-4">
          <h3 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
            <a href={latestPost.link}>{latestPost.title.rendered}</a>
          </h3>
          <div
            className="text-base font-normal my-4 dark:text-gray-300 text-gray-500"
            dangerouslySetInnerHTML={createMarkup(latestPost.excerpt.rendered)}
          />
          <a
            href={latestPost.link}
            className="font-semibold group flex flex-row space-x-2 w-full items-center"
          >
            <p>Check Web Story </p>
            <div className="transform  group-hover:translate-x-2 transition duration-300">
              &rarr;
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

function createMarkup(markupHTML: string) {
  return { __html: markupHTML };
}

export default WebStoryCard;
