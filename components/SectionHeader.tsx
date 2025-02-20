import Link from "next/link";

export default function SectionHeadder({
  title,
  url,
  children,
  urlTitle,
}: {
  title: string;
  url?: string;
  urlTitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
      <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center">
        {title}
      </h1>
      {url && (
        <Link
          href="https://www.youtube.com/@FellyphCintra"
          className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
        >
          {children}
          <span>{urlTitle}</span>
        </Link>
      )}
    </header>
  );
}
