import Post from "../../interfaces/Post";

const PostCard = ({ latestPost }: { latestPost: Post }) => {
  return (
    <div className="github-repo">
      <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
        <a href={latestPost.link}>{latestPost.title.rendered}</a>
      </h1>

      <div
        className="text-base font-normal my-4 text-gray-500"
        dangerouslySetInnerHTML={createMarkup(latestPost.excerpt.rendered)}
      />

      <a
        href={latestPost.link}
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <p>Read Post </p>
        <div className="transform  group-hover:translate-x-2 transition duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};

function createMarkup(markupHTML: string) {
  return { __html: markupHTML };
}

export default PostCard;
