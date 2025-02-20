import Video from "../../interfaces/Video";
import Image from "next/image";

const VideoCard = ({ video, index }: { video: Video; index: number }) => (
  <a
    key={video.id}
    href={`https://www.youtube.com/watch?v=${video.id}`}
    className={`w-full block ${
      index === 0 ? "col-span-3" : "col-span-3 sm:col-span-1"
    } shadow-2xl`}
  >
    <div className="relative overflow-hidden">
      <Image
        src={video.thumbnail}
        alt={video.title}
        width={index === 0 ? 1200 : 500}
        height={index === 0 ? 900 : 281}
        className="transform hover:scale-125 transition duration-2000 ease-out"
      />
      <h3
        className={`absolute text-gray-50 font-bold  ${
          index === 0 ? "text-xl top-10 left-10" : "text-xs top-4 left-4"
        } bg-red-500 rounded-md px-2`}
      >
        {video.title}
      </h3>
      <h4
        className={`absolute text-gray-50 font-bold  ${
          index === 0 ? "text-xl bottom-10 left-10" : "text-xs bottom-4 left-4"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </h4>
    </div>
  </a>
);

export default VideoCard;
